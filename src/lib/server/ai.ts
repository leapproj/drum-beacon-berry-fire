import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";
import { newId } from "@/lib/ids";
import { tenantMiddleware as MW } from "./operator-auth";
import { eventReadiness, requireFestivalMember } from "./helpers";

export const getAiInbox = createServerFn({ method: "GET" }).middleware([MW]).validator((festivalId: any) => festivalId).handler(async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, festivalId);
	const recs = await sql.query<any>(`select id, festival_id, title, body, severity, status, kind, created_at::text as created_at
       from ai_recommendations where festival_id = $1
       order by created_at desc`, [festivalId]);
	const events = await sql.query<any>(`select id, name from events where festival_id = $1 order by starts_at`, [festivalId]);
	return {
		recs,
		readiness: await Promise.all(events.map(async (e: any) => ({
			id: e.id,
			name: e.name,
			...await eventReadiness(sql, e.id)
		})))
	};
});
export const setRecommendationStatus = createServerFn({ method: "POST" }).middleware([MW]).validator((input: any) => input).handler(async ({ context, data }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, data.festivalId);
	await sql.query<any>(`update ai_recommendations set status = $1 where id = $2 and festival_id = $3`, [
		data.status,
		data.id,
		data.festivalId
	]);
	return { ok: true };
});
export const runAiReview = createServerFn({ method: "POST" }).middleware([MW]).validator((festivalId: any) => festivalId).handler(async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, festivalId);
	const compact = (await sql.query<any>(`select e.id, e.name, e.starts_at::text as starts_at, e.emergency_contact, e.venue_id, e.published,
              (select count(*)::int from gate_access_keys k where k.event_id = e.id and k.active) as gates,
              (select count(*)::int from surveys s where s.event_id = e.id) as surveys
       from events e where e.festival_id = $1 order by e.starts_at`, [festivalId])).map((e: any) => ({
		name: e.name,
		starts: e.starts_at,
		gates: e.gates,
		surveys: e.surveys,
		venue: Boolean(e.venue_id),
		emergency: Boolean(String(e.emergency_contact ?? "").trim()),
		published: e.published
	}));
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "AI is not available in this environment"
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 700,
			messages: [{
				role: "system",
				content: "You are the eSAULOG AI Festival Organizer. Return 2-4 operational recommendations as JSON array of {title, body, severity: info|warn, kind}. Be specific to the events given. No markdown."
			}, {
				role: "user",
				content: `Festival events (Asia/Manila, today 2026-08-22):\n${JSON.stringify(compact)}`
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `xAI API error ${res.status}`
	};
	const text = (await res.json()).choices[0]?.message.content ?? "[]";
	let parsed: any[] = [];
	try {
		const match = text.match(/\[[\s\S]*\]/);
		parsed = JSON.parse(match ? match[0] : text);
	} catch {
		parsed = [{
			title: "Operational review complete",
			body: text.slice(0, 600),
			severity: "info",
			kind: "ops"
		}];
	}
	const inserted = [];
	for (const rec of parsed.slice(0, 4)) {
		const id = newId("ai");
		await sql.query<any>(`insert into ai_recommendations (id, festival_id, title, body, severity, status, kind)
         values ($1,$2,$3,$4,$5,'open',$6)`, [
			id,
			festivalId,
			rec.title ?? "Recommendation",
			rec.body ?? "",
			rec.severity === "warn" ? "warn" : "info",
			rec.kind ?? "ops"
		]);
		inserted.push(id);
	}
	return {
		ok: true,
		inserted: inserted.length
	};
});

