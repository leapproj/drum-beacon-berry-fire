import { r as php, t as compact } from "./format-C77s4pFp.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as PageHeader, r as Stat, t as Page } from "./shell-BRN3PYI4.mjs";
import { t as StatusBadge } from "./status-badge-CQBhovZh.mjs";
import { a as Bar, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
import { o as getHqEconomics } from "./erp-D21E2W5T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-Di7klvUb.js
var import_jsx_runtime = require_jsx_runtime();
function EconomicsPage() {
	const { data } = useQuery({
		queryKey: ["hq"],
		queryFn: () => getHqEconomics()
	});
	const t = data?.totals;
	const chart = (data?.byFestival ?? []).map((f) => ({
		name: f.name.replace(/ 20\d\d/, ""),
		physical: f.physical,
		digital: f.digital
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Super Admin HQ",
			title: "Turnout, income, sponsors",
			description: "Network economics across tenants. Co-partner commission is 30% of digital sponsor income only."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Turnout",
					value: t ? compact(t.turnout) : "—",
					hint: "Registered participants"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Check-ins",
					value: t ? compact(t.checkins) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Physical income",
					value: t ? php(t.physical) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Digital income",
					value: t ? php(t.digital) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Co-partner 30%",
					value: data ? php(data.commission) : "—",
					hint: "Digital only"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-xs tracking-wide text-muted uppercase",
				children: "Sponsor income by tenant"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: 240,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data: chart,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: "rgba(242,239,230,0.08)",
							vertical: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "name",
							tick: {
								fill: "#9a9588",
								fontSize: 11
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: {
							fill: "#9a9588",
							fontSize: 11
						} }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
							background: "#141612",
							border: "1px solid #2a2c26",
							color: "#f2efe6"
						} }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "physical",
							fill: "#9a9588",
							radius: [
								4,
								4,
								0,
								0
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "digital",
							fill: "#d8ddd4",
							radius: [
								4,
								4,
								0,
								0
							]
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[640px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: "Festival"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: "Turnout"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: "In"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: "Physical"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: "Digital"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: "Model"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: (data?.byFestival ?? []).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border last:border-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/$festivalId",
								params: { festivalId: f.id },
								className: "font-medium hover:underline",
								children: f.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: f.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 tabular-nums",
							children: compact(f.turnout)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 tabular-nums",
							children: compact(f.checkins)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 tabular-nums",
							children: php(f.physical)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 tabular-nums",
							children: php(f.digital)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-muted",
							children: f.copartner ? "Co-partner 30%" : "Self-serve"
						})
					]
				}, f.id)) })]
			})
		})
	] });
}
//#endregion
export { EconomicsPage as component };
