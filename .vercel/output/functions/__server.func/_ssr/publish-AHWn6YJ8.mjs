import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { s as Route$7 } from "./router-5l7utmBS.mjs";
import { n as PageHeader, t as Page } from "./shell-GkA-jbwc.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { t as StatusBadge } from "./status-badge-BpSBK1zA.mjs";
import { t as Progress } from "./progress-t968lKA4.mjs";
import { o as getAdminDashboard } from "./admin-DtCq0-PI.mjs";
import { c as getPlanning } from "./erp-D21E2W5T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/publish-AHWn6YJ8.js
var import_jsx_runtime = require_jsx_runtime();
function PublishPage() {
	const { festivalId } = Route$7.useParams();
	const nav = useNavigate();
	const dash = useQuery({
		queryKey: ["admin", festivalId],
		queryFn: () => getAdminDashboard({ data: festivalId })
	});
	const plan = useQuery({
		queryKey: ["plan", festivalId],
		queryFn: () => getPlanning({ data: festivalId })
	});
	const f = dash.data?.festival;
	const items = plan.data?.items ?? [];
	const done = items.filter((i) => i.done).length;
	const pct = items.length ? Math.round(done / items.length * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Go live",
		title: "Preview & publish",
		description: "Review the public festival, then confirm. Confirming opens the payment portal to select a package.",
		actions: f ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/festivals/$slug",
			params: { slug: f.slug },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				children: "Open public preview"
			})
		}) : null
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl",
					children: f?.name ?? "Festival"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [
						f?.city,
						" · ",
						f?.starts_on,
						" – ",
						f?.ends_on
					]
				})] }), f ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: f.status }) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-xs tracking-wide text-muted uppercase",
				children: "Planning completeness"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: pct,
					className: "flex-1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums text-sm text-muted",
					children: [pct, "%"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-2 text-sm sm:grid-cols-2",
				children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: i.done ? "text-ok" : "text-muted",
					children: [i.done ? "Ready — " : "Open — ", i.label]
				}, i.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => void nav({
						to: "/pay",
						search: { festivalId }
					}),
					children: "Confirm publish — continue to payment"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/$festivalId/planning",
					params: { festivalId },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						children: "Back to plan"
					})
				})]
			})
		]
	})] });
}
//#endregion
export { PublishPage as component };
