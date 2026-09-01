import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as PageHeader, t as Page } from "./shell-GkA-jbwc.mjs";
import { i as getSspOverview } from "./ssp-BRJpZopk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/organizations-CdyJXNYV.js
var import_jsx_runtime = require_jsx_runtime();
function OrgsPage() {
	const { data } = useQuery({
		queryKey: ["ssp"],
		queryFn: () => getSspOverview()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Directory",
		title: "Organizations",
		description: "Platform, LGU, and organizer records that own festival tenants. TukodPH is the platform HQ."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
		children: (data?.orgs ?? []).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 px-5 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: o.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [o.city, o.province ? `, ${o.province}` : ""]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: o.kind
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-subtle tabular-nums",
					children: [o.festivals ?? 0, " tenants"]
				})]
			})]
		}, o.id))
	})] });
}
//#endregion
export { OrgsPage as component };
