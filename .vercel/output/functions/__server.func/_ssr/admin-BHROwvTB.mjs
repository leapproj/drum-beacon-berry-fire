import { r as getSql } from "./db-DeV0fZK1.mjs";
import { i as createServerFn } from "./ssr2.mjs";
import { a as tenantMiddleware } from "./operator-auth-D61No1_2.mjs";
import { i as newId, t as createServerRpc } from "./createServerRpc-L9LYBe9K.mjs";
import { a as mapEvent, n as eventReadiness, o as requireFestivalMember, t as audit } from "./helpers-Ceyqsr-3.mjs";
import { t as ensureSeed } from "./seed-OfWLm1DM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BHROwvTB.js
var getAdminDashboard_createServerFn_handler = createServerRpc({
	id: "36a0d6f1c97d92068a5f4a7080d0ecfcee4f0333332d0828686298ef670d6062",
	name: "getAdminDashboard",
	filename: "src/lib/server/admin.ts"
}, (opts) => getAdminDashboard.__executeServer(opts));
var getAdminDashboard = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(getAdminDashboard_createServerFn_handler, async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await ensureSeed(sql);
	await requireFestivalMember(sql, context.userId, festivalId);
	const festival = (await sql.query(`select * from festivals where id = $1`, [festivalId]))[0];
	if (!festival) throw new Error("Festival not found");
	const stats = await sql.query(`select
        (select count(*)::int from participants where festival_id = $1) as participants,
        (select count(*)::int from events where festival_id = $1) as events,
        (select count(*)::int from events where festival_id = $1 and starts_at::date = date '2026-08-22') as today_events,
        (select count(*)::int from checkins c join events e on e.id = c.event_id where e.festival_id = $1 and c.result = 'valid') as checkins,
        (select count(*)::int from gate_access_keys where festival_id = $1 and active) as gate_keys,
        (select count(*)::int from vendors where festival_id = $1) as vendors`, [festivalId]);
	const mapped = (await sql.query(`select e.*, v.name as venue_name,
              (select count(*)::int from event_registrations r where r.event_id = e.id) as registered_count,
              (select count(*)::int from checkins c where c.event_id = e.id and c.result = 'valid') as checkin_count
       from events e
       left join venues v on v.id = e.venue_id
       where e.festival_id = $1
       order by e.starts_at`, [festivalId])).map(mapEvent);
	const engagement = mapped.length === 0 ? 0 : Math.round(mapped.filter((e) => e.published).length / mapped.length * 70 + Math.min(30, stats[0].checkins / Math.max(1, stats[0].participants) * 30));
	const readinessScores = await Promise.all(mapped.slice(0, 8).map(async (e) => ({
		id: e.id,
		...await eventReadiness(sql, e.id)
	})));
	const avgReady = readinessScores.length === 0 ? 0 : Math.round(readinessScores.reduce((a, b) => a + b.score, 0) / readinessScores.length);
	return {
		festival,
		stats: stats[0],
		events: mapped,
		engagement,
		readiness: avgReady,
		readinessScores
	};
});
var getAdminEvents_createServerFn_handler = createServerRpc({
	id: "89c667860190ab9e078fba9ecc07c735b083d184c7f027159e4a0ab8ee558081",
	name: "getAdminEvents",
	filename: "src/lib/server/admin.ts"
}, (opts) => getAdminEvents.__executeServer(opts));
var getAdminEvents = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(getAdminEvents_createServerFn_handler, async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, festivalId);
	const events = await sql.query(`select e.*, v.name as venue_name, c.name as category_name,
              (select count(*)::int from event_registrations r where r.event_id = e.id) as registered_count,
              (select count(*)::int from checkins ch where ch.event_id = e.id and ch.result = 'valid') as checkin_count
       from events e
       left join venues v on v.id = e.venue_id
       left join event_categories c on c.id = e.category_id
       where e.festival_id = $1
       order by e.starts_at`, [festivalId]);
	const venues = await sql.query(`select * from venues where festival_id = $1`, [festivalId]);
	const categories = await sql.query(`select * from event_categories where festival_id = $1`, [festivalId]);
	const sponsors = await sql.query(`select id, name from sponsors where festival_id = $1`, [festivalId]);
	return {
		events: events.map(mapEvent),
		venues,
		categories,
		sponsors
	};
});
var getAdminEvent_createServerFn_handler = createServerRpc({
	id: "d919283e97b08ae2904d583331c2be5fd79b8991914da95f90d9ef0f09ef7724",
	name: "getAdminEvent",
	filename: "src/lib/server/admin.ts"
}, (opts) => getAdminEvent.__executeServer(opts));
var getAdminEvent = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((input) => input).handler(getAdminEvent_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, data.festivalId);
	const rows = await sql.query(`select e.*, v.name as venue_name, c.name as category_name
       from events e
       left join venues v on v.id = e.venue_id
       left join event_categories c on c.id = e.category_id
       where e.id = $1 and e.festival_id = $2`, [data.eventId, data.festivalId]);
	if (!rows[0]) return null;
	const readiness = await eventReadiness(sql, data.eventId);
	const keys = await sql.query(`select k.*, g.name as gate_name from gate_access_keys k
       left join gates g on g.id = k.gate_id
       where k.event_id = $1`, [data.eventId]);
	return {
		event: mapEvent(rows[0]),
		readiness,
		keys
	};
});
var createEvent_createServerFn_handler = createServerRpc({
	id: "b4ce1fbd16f82c5c4b044165a383e5bc5285fb42582c21653e04f51d3b745d1d",
	name: "createEvent",
	filename: "src/lib/server/admin.ts"
}, (opts) => createEvent.__executeServer(opts));
var createEvent = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((input) => input).handler(createEvent_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, data.festivalId);
	const id = newId("evt");
	await sql.query(`insert into events (
        id, festival_id, venue_id, category_id, name, description, organizer, event_type,
        starts_at, ends_at, capacity, registration_mode, access_mode, status, published,
        emergency_contact, sponsor_id, engagement_notes
      ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)`, [
		id,
		data.festivalId,
		data.venue_id,
		data.category_id,
		data.name,
		data.description,
		data.organizer,
		data.event_type,
		data.starts_at,
		data.ends_at,
		data.capacity,
		data.registration_mode,
		data.access_mode,
		data.published ? "published" : "draft",
		data.published,
		data.emergency_contact,
		data.sponsor_id,
		data.engagement_notes
	]);
	await audit(sql, context.userId, "event.create", "event", id);
	await sql.query(`update planning_items set done = true where festival_id = $1 and key = 'calendar'`, [data.festivalId]);
	return { id };
});
var getParticipants_createServerFn_handler = createServerRpc({
	id: "f98eaaf09331fd6c01cec7372f63aefc3bbe6dfda0a8a0766afb7703de5b924c",
	name: "getParticipants",
	filename: "src/lib/server/admin.ts"
}, (opts) => getParticipants.__executeServer(opts));
var getParticipants = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(getParticipants_createServerFn_handler, async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, festivalId);
	return sql.query(`select p.*, e.credential_id
       from participants p
       left join epasses e on e.participant_id = p.id
       where p.festival_id = $1
       order by p.created_at desc`, [festivalId]);
});
var getVenues_createServerFn_handler = createServerRpc({
	id: "6f86fc25271364c56d9fb7cc50784c558ce373e6f2fcfc9da62ca10fb5dfda13",
	name: "getVenues",
	filename: "src/lib/server/admin.ts"
}, (opts) => getVenues.__executeServer(opts));
var getVenues = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(getVenues_createServerFn_handler, async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, festivalId);
	return sql.query(`select * from venues where festival_id = $1`, [festivalId]);
});
var createVenue_createServerFn_handler = createServerRpc({
	id: "e59abb385defdb5a8ed7212d1bf75862648c87b859933a1b76a8976476ee43ce",
	name: "createVenue",
	filename: "src/lib/server/admin.ts"
}, (opts) => createVenue.__executeServer(opts));
var createVenue = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((input) => input).handler(createVenue_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, data.festivalId);
	const id = newId("ven");
	await sql.query(`insert into venues (id, festival_id, name, address, capacity, kind) values ($1,$2,$3,$4,$5,$6)`, [
		id,
		data.festivalId,
		data.name,
		data.address,
		data.capacity,
		data.kind
	]);
	return { id };
});
var getCmsPages_createServerFn_handler = createServerRpc({
	id: "3c9206b2f45f5b3163272bbf3c5a99453ee8ea7c1a1f6e1bb68a2c81a382c6df",
	name: "getCmsPages",
	filename: "src/lib/server/admin.ts"
}, (opts) => getCmsPages.__executeServer(opts));
var getCmsPages = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(getCmsPages_createServerFn_handler, async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, festivalId);
	return sql.query(`select * from festival_pages where festival_id = $1 order by slug`, [festivalId]);
});
var saveCmsPage_createServerFn_handler = createServerRpc({
	id: "b929b98f53bb86079e8c636d7aa0d98255d05f1709a02703b13bad0fae94ee58",
	name: "saveCmsPage",
	filename: "src/lib/server/admin.ts"
}, (opts) => saveCmsPage.__executeServer(opts));
var saveCmsPage = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((input) => input).handler(saveCmsPage_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, data.festivalId);
	await sql.query(`update festival_pages set title = $1, body = $2, updated_at = now() where id = $3 and festival_id = $4`, [
		data.title,
		data.body,
		data.id,
		data.festivalId
	]);
	return { ok: true };
});
var getGateKeys_createServerFn_handler = createServerRpc({
	id: "716332d8c6b9133a02e587543ecc3b64781f0e21505401c698968d3c5c023a1d",
	name: "getGateKeys",
	filename: "src/lib/server/admin.ts"
}, (opts) => getGateKeys.__executeServer(opts));
var getGateKeys = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(getGateKeys_createServerFn_handler, async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, festivalId);
	return sql.query(`select k.*, e.name as event_name, g.name as gate_name
       from gate_access_keys k
       join events e on e.id = k.event_id
       left join gates g on g.id = k.gate_id
       where k.festival_id = $1
       order by k.code`, [festivalId]);
});
var createGateKey_createServerFn_handler = createServerRpc({
	id: "8b1f7fa1d6b571f6cffb5884a0797b543e884be0167bf7cc90c1f2ebec99a9b0",
	name: "createGateKey",
	filename: "src/lib/server/admin.ts"
}, (opts) => createGateKey.__executeServer(opts));
var createGateKey = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((input) => input).handler(createGateKey_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, data.festivalId);
	const id = newId("key");
	const gateId = newId("gate");
	await sql.query(`insert into gates (id, festival_id, event_id, name) values ($1,$2,$3,$4)`, [
		gateId,
		data.festivalId,
		data.eventId,
		"Gate"
	]);
	await sql.query(`insert into gate_access_keys (id, festival_id, event_id, gate_id, code, staff_role, max_devices, active)
       values ($1,$2,$3,$4,$5,$6,$7,true)`, [
		id,
		data.festivalId,
		data.eventId,
		gateId,
		data.code.toUpperCase(),
		data.staff_role,
		data.max_devices
	]);
	await audit(sql, context.userId, "gate.key.create", "gate_access_key", id);
	await sql.query(`update planning_items set done = true where festival_id = $1 and key = 'gate_staff'`, [data.festivalId]);
	return {
		id,
		code: data.code.toUpperCase()
	};
});
var getAdminAnalytics_createServerFn_handler = createServerRpc({
	id: "fb3773e36b6524a7f120e2fe74dca618058c01c08490ae7ff6d5597048db4fe5",
	name: "getAdminAnalytics",
	filename: "src/lib/server/admin.ts"
}, (opts) => getAdminAnalytics.__executeServer(opts));
var getAdminAnalytics = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(getAdminAnalytics_createServerFn_handler, async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, festivalId);
	return {
		byName: await sql.query(`select name, count(*)::int as n from analytics_events
       where festival_id = $1 group by name order by n desc`, [festivalId]),
		byDay: await sql.query(`select created_at::date::text as day, count(*)::int as n
       from analytics_events where festival_id = $1
       group by created_at::date order by day`, [festivalId]),
		eventPerf: await sql.query(`select e.name,
              (select count(*)::int from event_registrations r where r.event_id = e.id) as registered,
              (select count(*)::int from checkins c where c.event_id = e.id and c.result = 'valid') as checkins
       from events e where e.festival_id = $1 order by e.starts_at`, [festivalId]),
		cities: await sql.query(`select city, count(*)::int as n from participants where festival_id = $1 group by city order by n desc`, [festivalId])
	};
});
var listFestivalsForUser_createServerFn_handler = createServerRpc({
	id: "06a1a2af5eb43270da989d07290f1fc39c627e71490cf81ea43fe539a97031c2",
	name: "listFestivalsForUser",
	filename: "src/lib/server/admin.ts"
}, (opts) => listFestivalsForUser.__executeServer(opts));
var listFestivalsForUser = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).handler(listFestivalsForUser_createServerFn_handler, async ({ context }) => {
	const sql = await getSql();
	await ensureSeed(sql);
	return sql.query(`select f.* from festivals f
       join festival_members m on m.festival_id = f.id
       where m.user_id = $1
       order by f.starts_on`, [context.userId]);
});
var getStaff_createServerFn_handler = createServerRpc({
	id: "f9913ca0b9875998308b1f56877e7245361020d16a6d0d10b14f55ba584c5711",
	name: "getStaff",
	filename: "src/lib/server/admin.ts"
}, (opts) => getStaff.__executeServer(opts));
var getStaff = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(getStaff_createServerFn_handler, async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, festivalId);
	return sql.query(`select s.*, e.name as event_name from staff_members s left join events e on e.id = s.assigned_event_id where s.festival_id = $1 order by s.full_name`, [festivalId]);
});
var addStaff_createServerFn_handler = createServerRpc({
	id: "8d9edc443551f98e947b4cabf0d4e2178e83dafe1fece7513c8f6a786ccbf02a",
	name: "addStaff",
	filename: "src/lib/server/admin.ts"
}, (opts) => addStaff.__executeServer(opts));
var addStaff = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((input) => input).handler(addStaff_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, data.festivalId);
	const id = newId("stf");
	await sql.query(`insert into staff_members (id, festival_id, full_name, role, phone, email, status, assigned_event_id, notes) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)`, [
		id,
		data.festivalId,
		data.full_name,
		data.role,
		data.phone || "",
		data.email || "",
		data.status || "active",
		data.assigned_event_id || null,
		data.notes || ""
	]);
	return { id };
});
var getGateCheckins_createServerFn_handler = createServerRpc({
	id: "5cb79f55f7b5be2e94755d6e0131695a92e403956400f4bcbb82e8d4116bf1e8",
	name: "getGateCheckins",
	filename: "src/lib/server/admin.ts"
}, (opts) => getGateCheckins.__executeServer(opts));
var getGateCheckins = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(getGateCheckins_createServerFn_handler, async ({ context, data: festivalId }) => {
	const sql = await getSql();
	await requireFestivalMember(sql, context.userId, festivalId);
	return sql.query(`select c.id, c.event_id, c.result, c.checked_in_at::text as created_at, p.full_name as participant_name, ep.credential_id, e.name as event_name
     from checkins c
     join epasses ep on ep.id = c.epass_id
     join participants p on p.id = ep.participant_id
     join events e on e.id = c.event_id
     where e.festival_id = $1
     order by c.checked_in_at desc
     limit 80`, [festivalId]);
});
//#endregion
export { addStaff_createServerFn_handler, createEvent_createServerFn_handler, createGateKey_createServerFn_handler, createVenue_createServerFn_handler, getAdminAnalytics_createServerFn_handler, getAdminDashboard_createServerFn_handler, getAdminEvent_createServerFn_handler, getAdminEvents_createServerFn_handler, getCmsPages_createServerFn_handler, getGateCheckins_createServerFn_handler, getGateKeys_createServerFn_handler, getParticipants_createServerFn_handler, getStaff_createServerFn_handler, getVenues_createServerFn_handler, listFestivalsForUser_createServerFn_handler, saveCmsPage_createServerFn_handler };
