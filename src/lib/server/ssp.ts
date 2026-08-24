import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";
import { newId } from "@/lib/ids";
import { sspMiddleware as MW } from "./operator-auth";
import { audit, requireSsp } from "./helpers";
import { ensureSeed } from "./seed";

export const getSspOverview = createServerFn({ method: "GET" }).middleware([MW]).handler(async ({ context }) => {
	const sql = await getSql();
	await ensureSeed(sql);
	await requireSsp(sql, context.userId);
	const festivals = await sql.query<any>(`select f.*,
              (select count(*)::int from participants p where p.festival_id = f.id) as participants,
              (select count(*)::int from events e where e.festival_id = f.id) as events
       from festivals f
       order by f.starts_on`);
	const stats = await sql.query<any>(`select
        (select count(*)::int from festivals where status = 'LIVE') as festivals,
        (select count(*)::int from festivals where status in ('SETUP','DRAFT','PLANNING')) as upcoming,
        (select count(*)::int from participants) as participants,
        (select count(*)::int from events) as events,
        (select count(*)::int from vendors) as vendors,
        (select count(*)::int from checkins where result = 'valid') as checkins,
        coalesce((select sum(amount_php)::int from sponsor_income where channel = 'physical'),0) as physical,
        coalesce((select sum(amount_php)::int from sponsor_income where channel = 'digital'),0) as digital`);
	const orgs = await sql.query<any>(`select * from organizations order by name`);
	const members = await sql.query<any>(`select user_id, role, created_at::text as created_at from platform_members order by created_at desc`);
	const auditLogs = await sql.query<any>(`select id, action, entity, created_at::text as created_at from audit_logs order by created_at desc limit 12`);
	const commissionRow = await sql.query<any>(`select coalesce(sum(i.amount_php),0)::int as n
       from sponsor_income i
       join festivals f on f.id = i.festival_id
       where i.channel = 'digital' and f.copartner = true`);
	return {
		festivals,
		stats: stats[0],
		orgs,
		members,
		auditLogs,
		commission: Math.round((commissionRow[0]?.n ?? 0) * .3)
	};
});
export const createFestivalTenant = createServerFn({ method: "POST" }).middleware([MW]).validator((input: any) => input).handler(async ({ context, data }) => {
	const sql = await getSql();
	await requireSsp(sql, context.userId);
	const id = newId("fst");
	const slug = data.slug.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
	await sql.query<any>(`insert into festivals (
        id, organization_id, name, slug, tagline, description, logo_text, city, province,
        starts_on, ends_on, timezone, status, organizer_name, contact_email, created_by
      ) values ($1,'org_tukodph',$2,$3,$4,'',$5,$6,$7,$8,$9,'Asia/Manila','DRAFT',$10,$11,$12)`, [
		id,
		data.name,
		slug,
		data.tagline,
		data.name.slice(0, 2).toUpperCase(),
		data.city,
		data.province,
		data.starts_on,
		data.ends_on,
		data.organizer_name,
		data.contact_email,
		context.userId
	]);
	await sql.query<any>(`insert into festival_members (festival_id, user_id, role) values ($1,$2,'admin') on conflict do nothing`, [id, context.userId]);
	await sql.query<any>(`insert into festival_pages (id, festival_id, slug, title, body, published)
       values ($1,$2,'home',$3,'Welcome to the festival tenant.', true)`, [
		newId("pg"),
		id,
		data.name
	]);
	await audit(sql, context.userId, "festival.create", "festival", id, { slug });
	return {
		id,
		slug
	};
});
export const updateFestivalStatus = createServerFn({ method: "POST" }).middleware([MW]).validator((input: any) => input).handler(async ({ context, data }) => {
	const sql = await getSql();
	await requireSsp(sql, context.userId);
	await sql.query<any>(`update festivals set status = $1 where id = $2`, [data.status, data.id]);
	if (data.status === "LIVE") await sql.query<any>(`update planning_items set done = true where festival_id = $1 and key = 'go_live'`, [data.id]);
	await audit(sql, context.userId, "festival.status", "festival", data.id, { status: data.status });
	return { ok: true };
});

