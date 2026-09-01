import { r as getSql } from "./db-DeV0fZK1.mjs";
import { i as createServerFn } from "./ssr2.mjs";
import { a as tenantMiddleware } from "./operator-auth-D61No1_2.mjs";
import { i as newId, t as createServerRpc } from "./createServerRpc-L9LYBe9K.mjs";
import { n as eventReadiness, o as requireFestivalMember } from "./helpers-Ceyqsr-3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-CHYmWVf4.js
var getAiInbox_createServerFn_handler = createServerRpc({
	id: "55833ee17567912d4d6039b633db96eca401772e38a6f6b8ffe80f4d59d8f014",
	name: "getAiInbox",
	filename: "src/lib/server/ai.ts"
}, (opts) => getAiInbox.__executeServer(opts));
var getAiInbox = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(getAiInbox_createServerFn_handler, async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, festivalId);
	const recs = await sql.query(`select id, festival_id, title, body, severity, status, kind, created_at::text as created_at
       from ai_recommendations where festival_id = $1
       order by created_at desc`, [festivalId]);
	const events = await sql.query(`select id, name from events where festival_id = $1 order by starts_at`, [festivalId]);
	return {
		recs,
		readiness: await Promise.all(events.map(async (e) => ({
			id: e.id,
			name: e.name,
			...await eventReadiness(sql, e.id)
		})))
	};
});
var setRecommendationStatus_createServerFn_handler = createServerRpc({
	id: "53f2068aca038a474b80c04335c89991eebb77e549e57ca2730f7f00520375b3",
	name: "setRecommendationStatus",
	filename: "src/lib/server/ai.ts"
}, (opts) => setRecommendationStatus.__executeServer(opts));
var setRecommendationStatus = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((input) => input).handler(setRecommendationStatus_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, data.festivalId);
	await sql.query(`update ai_recommendations set status = $1 where id = $2 and festival_id = $3`, [
		data.status,
		data.id,
		data.festivalId
	]);
	return { ok: true };
});
var runAiReview_createServerFn_handler = createServerRpc({
	id: "95ddc1dbf1a322f64fce7348bf9abf0afdd5a61a114c913c7fa906a7308ab11a",
	name: "runAiReview",
	filename: "src/lib/server/ai.ts"
}, (opts) => runAiReview.__executeServer(opts));
var runAiReview = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(runAiReview_createServerFn_handler, async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, festivalId);
	const compact = (await sql.query(`select e.id, e.name, e.starts_at::text as starts_at, e.emergency_contact, e.venue_id, e.published,
              (select count(*)::int from gate_access_keys k where k.event_id = e.id and k.active) as gates,
              (select count(*)::int from surveys s where s.event_id = e.id) as surveys
       from events e where e.festival_id = $1 order by e.starts_at`, [festivalId])).map((e) => ({
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
	let parsed = [];
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
		await sql.query(`insert into ai_recommendations (id, festival_id, title, body, severity, status, kind)
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
//#endregion
export { getAiInbox_createServerFn_handler, runAiReview_createServerFn_handler, setRecommendationStatus_createServerFn_handler };
