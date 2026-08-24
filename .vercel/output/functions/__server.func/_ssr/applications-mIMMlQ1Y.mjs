import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as PageHeader, t as Page } from "./shell-BRN3PYI4.mjs";
import { t as StatusBadge } from "./status-badge-CQBhovZh.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { m as setCopartnerStatus, o as getHqEconomics, p as setApplicationStatus } from "./erp-D21E2W5T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/applications-mIMMlQ1Y.js
var import_jsx_runtime = require_jsx_runtime();
function AppsPage() {
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["hq"],
		queryFn: () => getHqEconomics()
	});
	const setApp = useMutation({
		mutationFn: (input) => setApplicationStatus({ data: input }),
		onSuccess: () => void qc.invalidateQueries({ queryKey: ["hq"] })
	});
	const setCp = useMutation({
		mutationFn: (input) => setCopartnerStatus({ data: input }),
		onSuccess: () => void qc.invalidateQueries({ queryKey: ["hq"] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Intake",
			title: "Tenant applications",
			description: "Organizers apply from the public site. HQ approves self-serve licenses or co-partner digital festivals."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: (data?.apps ?? []).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: a.festival_name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						a.organization_name,
						" · ",
						a.city,
						" · ",
						a.package_name
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: a.status }),
						a.festival_id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/$festivalId",
							params: { festivalId: a.festival_id },
							className: "text-sm text-muted hover:text-fg",
							children: "Desk"
						}) : null,
						a.status === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => setApp.mutate({
								id: a.id,
								status: "approved"
							}),
							children: "Approve"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => setApp.mutate({
								id: a.id,
								status: "rejected"
							}),
							children: "Reject"
						})] }) : null
					]
				})]
			}, a.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl",
			children: "Co-partner agreements"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "30% of digital sponsor income. Physical festival sponsors are out of scope."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: (data?.agreements ?? []).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: a.festival_name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						a.commission_pct,
						"% digital · ",
						a.notes
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: a.status }), a.status === "requested" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => setCp.mutate({
							id: a.id,
							status: "active"
						}),
						children: "Activate"
					}) : null]
				})]
			}, a.id))
		})
	] });
}
//#endregion
export { AppsPage as component };
