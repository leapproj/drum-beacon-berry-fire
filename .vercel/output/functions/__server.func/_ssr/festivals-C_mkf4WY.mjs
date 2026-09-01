import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { i as Skeleton } from "./operator-gate-D0cHrcyf.mjs";
import { n as PageHeader, t as Page } from "./shell-GkA-jbwc.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { t as StatusBadge } from "./status-badge-BpSBK1zA.mjs";
import { i as getSspOverview } from "./ssp-BRJpZopk.mjs";
import { t as CreateCopartnerDialog } from "./hq-create-festival-CGBSrMLZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/festivals-C_mkf4WY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FestivalsPage() {
	const { data, isLoading } = useQuery({
		queryKey: ["ssp"],
		queryFn: () => getSspOverview()
	});
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Tenants",
			title: "Festival tenants",
			description: "Super Admin HQ provisions public site, command center, participant portal, gate, vendor, sponsor, analytics, and AI organizer. Co-partner tenants are operated by TukodPH at 30% of digital sponsor income.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => setOpen(true),
				children: "Create as co-partner"
			})
		}),
		isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-40 rounded-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-40 rounded-xl" })]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: (data?.festivals ?? []).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/ssp/festivals/$festivalId",
				params: { festivalId: f.id },
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center rounded-md bg-surface-2 font-display",
							children: f.logo_text
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [f.copartner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs tracking-wide text-accent uppercase",
								children: "Co-partner"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: f.status })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-2xl",
						children: f.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							f.city,
							", ",
							f.province
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-subtle tabular-nums",
						children: [
							f.participants,
							" pax · ",
							f.events,
							" events · ",
							f.package_name ?? "Unlicensed"
						]
					})
				]
			}, f.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateCopartnerDialog, {
			open,
			onOpenChange: setOpen
		})
	] });
}
//#endregion
export { FestivalsPage as component };
