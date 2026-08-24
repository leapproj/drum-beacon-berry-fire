import { r as php, t as compact } from "./format-C77s4pFp.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as PageHeader, r as Stat, t as Page } from "./shell-BRN3PYI4.mjs";
import { t as StatusBadge } from "./status-badge-CQBhovZh.mjs";
import { n as getSspOverview } from "./ssp-Cscgt5eR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ssp-bGHli7pL.js
var import_jsx_runtime = require_jsx_runtime();
function SspHome() {
	const { data } = useQuery({
		queryKey: ["ssp"],
		queryFn: () => getSspOverview()
	});
	const s = data?.stats;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "eSAULOG SSP",
			title: "TukodPH command",
			description: "Control every festival tenant. Create and publish as digital co-partner. Tenants cannot enter this portal."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Live tenants",
					value: s?.festivals ?? "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Draft / setup",
					value: s?.upcoming ?? "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Turnout",
					value: s ? compact(s.participants) : "—",
					hint: "Registered participants"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Check-ins",
					value: s ? compact(s.checkins) : "—"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Events",
					value: s ? compact(s.events) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Physical income",
					value: s ? php(s.physical) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Digital income",
					value: s ? php(s.digital) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Co-partner 30%",
					value: data ? php(data.commission) : "—",
					hint: "Digital sponsor income only"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl tracking-tight",
			children: "Tenants"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: (data?.festivals ?? []).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/ssp/festivals/$festivalId",
				params: { festivalId: f.id },
				className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4 hover:bg-surface-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: f.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						f.city,
						" · ",
						f.starts_on,
						" – ",
						f.ends_on
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums",
							children: [f.participants, " pax"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums",
							children: [f.events, " events"]
						}),
						f.copartner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Co-partner" }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: f.status })
					]
				})]
			}, f.id))
		})
	] });
}
//#endregion
export { SspHome as component };
