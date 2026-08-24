import { r as getSql } from "./db-Cc_rm3jI.mjs";
import { i as createServerFn } from "./ssr2.mjs";
import { i as sspMiddleware } from "./operator-auth-D61No1_2.mjs";
import { i as newId, t as createServerRpc } from "./createServerRpc-L9LYBe9K.mjs";
import { o as requireSsp, t as audit } from "./helpers-ChFRDPiM.mjs";
import { t as ensureSeed } from "./seed-CmrgG_eq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ssp-C_LkiynI.js
var getSspOverview_createServerFn_handler = createServerRpc({
	id: "0cb38cb4613649ce0145b4654c86371a5c018907a8952aacc32a6fac0ded2289",
	name: "getSspOverview",
	filename: "src/lib/server/ssp.ts"
}, (opts) => getSspOverview.__executeServer(opts));
var getSspOverview = createServerFn({ method: "GET" }).middleware([sspMiddleware]).handler(getSspOverview_createServerFn_handler, async ({ context }) => {
	const sql = await getSql();
	await ensureSeed(sql);
	await requireSsp(sql, context.userId);
	const festivals = await sql.query(`select f.*,
              (select count(*)::int from participants p where p.festival_id = f.id) as participants,
              (select count(*)::int from events e where e.festival_id = f.id) as events
       from festivals f
       order by f.starts_on`);
	const stats = await sql.query(`select
        (select count(*)::int from festivals where status = 'LIVE') as festivals,
        (select count(*)::int from festivals where status in ('SETUP','DRAFT','PLANNING')) as upcoming,
        (select count(*)::int from participants) as participants,
        (select count(*)::int from events) as events,
        (select count(*)::int from vendors) as vendors,
        (select count(*)::int from checkins where result = 'valid') as checkins,
        coalesce((select sum(amount_php)::int from sponsor_income where channel = 'physical'),0) as physical,
        coalesce((select sum(amount_php)::int from sponsor_income where channel = 'digital'),0) as digital`);
	const orgs = await sql.query(`select * from organizations order by name`);
	const members = await sql.query(`select user_id, role, created_at::text as created_at from platform_members order by created_at desc`);
	const auditLogs = await sql.query(`select id, action, entity, created_at::text as created_at from audit_logs order by created_at desc limit 12`);
	const commissionRow = await sql.query(`select coalesce(sum(i.amount_php),0)::int as n
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
var createFestivalTenant_createServerFn_handler = createServerRpc({
	id: "5c358a927533004cc3a723e5e17e8ce1779c55f5dcc55ce5d219ed1da4fe4477",
	name: "createFestivalTenant",
	filename: "src/lib/server/ssp.ts"
}, (opts) => createFestivalTenant.__executeServer(opts));
var createFestivalTenant = createServerFn({ method: "POST" }).middleware([sspMiddleware]).validator((input) => input).handler(createFestivalTenant_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireSsp(sql, context.userId);
	const id = newId("fst");
	const slug = data.slug.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
	await sql.query(`insert into festivals (
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
	await sql.query(`insert into festival_members (festival_id, user_id, role) values ($1,$2,'admin') on conflict do nothing`, [id, context.userId]);
	await sql.query(`insert into festival_pages (id, festival_id, slug, title, body, published)
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
var updateFestivalStatus_createServerFn_handler = createServerRpc({
	id: "2e85a117ad835b49b9f185830d89cd95329a06beff2dfd34680509d2dfa9a81b",
	name: "updateFestivalStatus",
	filename: "src/lib/server/ssp.ts"
}, (opts) => updateFestivalStatus.__executeServer(opts));
var updateFestivalStatus = createServerFn({ method: "POST" }).middleware([sspMiddleware]).validator((input) => input).handler(updateFestivalStatus_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireSsp(sql, context.userId);
	await sql.query(`update festivals set status = $1 where id = $2`, [data.status, data.id]);
	if (data.status === "LIVE") await sql.query(`update planning_items set done = true where festival_id = $1 and key = 'go_live'`, [data.id]);
	await audit(sql, context.userId, "festival.status", "festival", data.id, { status: data.status });
	return { ok: true };
});
//#endregion
export { createFestivalTenant_createServerFn_handler, getSspOverview_createServerFn_handler, updateFestivalStatus_createServerFn_handler };
