import { i as rangeLabel, t as compact } from "./_ssr/format-C77s4pFp.mjs";
import { o as require_jsx_runtime } from "./_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "./_libs/tanstack__react-query.mjs";
import { g as Route$15 } from "./_ssr/router-DBpYOzCD.mjs";
import { n as PageHeader, r as Stat, t as Page } from "./_ssr/shell-BRN3PYI4.mjs";
import { t as Progress } from "./_ssr/progress-t968lKA4.mjs";
import { o as getAdminDashboard } from "./_ssr/admin-DtCq0-PI.mjs";
import { t as StatusBadge } from "./_ssr/status-badge-CQBhovZh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_festivalId-C8VdUAz8.js
var import_jsx_runtime = require_jsx_runtime();
function AdminHome() {
	const { festivalId } = Route$15.useParams();
	const { data } = useQuery({
		queryKey: ["admin", festivalId],
		queryFn: () => getAdminDashboard({ data: festivalId })
	});
	const f = data?.festival;
	const s = data?.stats;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Festival command center",
			title: f?.name ?? "Festival",
			description: f ? `${f.city} · ${f.hero_kicker}` : "Loading tenant…"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3 lg:grid-cols-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Participants",
					value: s ? compact(s.participants) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Events",
					value: s?.events ?? "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Today’s events",
					value: s?.today_events ?? "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Check-ins",
					value: s ? compact(s.checkins) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Active keys",
					value: s?.gate_keys ?? "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Vendors",
					value: s?.vendors ?? "—"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-3 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Engagement"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-display text-4xl tabular-nums",
						children: [data?.engagement ?? 0, "%"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						className: "mt-3",
						value: data?.engagement ?? 0
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Festival readiness"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-display text-4xl tabular-nums",
						children: [data?.readiness ?? 0, "%"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						className: "mt-3",
						value: data?.readiness ?? 0
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl",
			children: "Program"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: (data?.events ?? []).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/admin/$festivalId/events/$eventId",
				params: {
					festivalId,
					eventId: e.id
				},
				className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4 hover:bg-surface-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: e.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						e.venue_name ?? "Venue TBA",
						" · ",
						rangeLabel(e.starts_at, e.ends_at)
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted tabular-nums",
						children: [
							e.checkin_count ?? 0,
							"/",
							e.registered_count ?? 0
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: e.status })]
				})]
			}, e.id))
		})
	] });
}
//#endregion
export { AdminHome as component };
