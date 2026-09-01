import { i as rangeLabel } from "./format-CP3TpnOc.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { r as Route$1 } from "./router-5l7utmBS.mjs";
import { n as PageHeader, t as Page } from "./shell-GkA-jbwc.mjs";
import { t as StatusBadge } from "./status-badge-BpSBK1zA.mjs";
import { t as Progress } from "./progress-t968lKA4.mjs";
import { s as getAdminEvent } from "./admin-DtCq0-PI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events._eventId-B_3JjWYk.js
var import_jsx_runtime = require_jsx_runtime();
function EventDetail() {
	const { festivalId, eventId } = Route$1.useParams();
	const { data } = useQuery({
		queryKey: ["admin-event", eventId],
		queryFn: () => getAdminEvent({ data: {
			festivalId,
			eventId
		} })
	});
	const e = data?.event;
	const r = data?.readiness;
	if (!e) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, { children: "Loading event…" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: e.event_type,
		title: e.name,
		description: `${e.venue_name ?? "Venue TBA"} · ${rangeLabel(e.starts_at, e.ends_at)}`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 md:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:col-span-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Readiness score"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-display text-5xl tabular-nums",
					children: [r?.score ?? 0, "%"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					className: "mt-3",
					value: r?.score ?? 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-2 text-sm",
					children: (r?.items ?? []).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: i.ok ? "text-ok" : i.warn ? "text-warn" : "text-danger",
							children: i.ok ? "Ready" : i.warn ? "Watch" : "Missing"
						})]
					}, i.key))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:col-span-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Record"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: e.status })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: e.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-6 grid gap-3 text-sm sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Organizer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: e.organizer || "—" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Capacity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "tabular-nums",
							children: e.capacity
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Registration"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: e.registration_mode })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Access"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: e.access_mode })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Emergency"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: e.emergency_contact || "—" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Registered / in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "tabular-nums",
							children: [
								e.registered_count ?? 0,
								" / ",
								e.checkin_count ?? 0
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-8 text-xs tracking-wide text-muted uppercase",
					children: "Gate access keys"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-2",
					children: (data?.keys ?? []).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-muted",
						children: "None issued — AI Organizer will flag this."
					}) : data.keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between font-mono text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: k.code }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: k.staff_role
						})]
					}, k.id))
				})
			]
		})]
	})] });
}
//#endregion
export { EventDetail as component };
