import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as PageHeader, t as Page } from "./shell-BRN3PYI4.mjs";
import { n as getSspOverview } from "./ssp-Cscgt5eR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/users-BIQ2ONjE.js
var import_jsx_runtime = require_jsx_runtime();
function UsersPage() {
	const { data } = useQuery({
		queryKey: ["ssp"],
		queryFn: () => getSspOverview()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Access",
			title: "Platform users",
			description: "SSP membership is granted on first sign-in in this environment so operators can tour every surface."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: (data?.members ?? []).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-sm",
					children: m.user_id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: m.created_at
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: m.role
				})]
			}, m.user_id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl",
			children: "Audit log"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: (data?.auditLogs ?? []).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between gap-3 px-5 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					a.action,
					" · ",
					a.entity
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted tabular-nums",
					children: a.created_at
				})]
			}, a.id))
		})
	] });
}
//#endregion
export { UsersPage as component };
