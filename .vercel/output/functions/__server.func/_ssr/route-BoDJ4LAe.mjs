import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { d as useRouterState, m as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SspGate } from "./operator-gate-X6EzhcLg.mjs";
import { i as TopBar } from "./shell-BRN3PYI4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-BoDJ4LAe.js
var import_jsx_runtime = require_jsx_runtime();
function SspLayout() {
	if (useRouterState({ select: (s) => s.location.pathname }) === "/ssp/login") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SspGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			kicker: "Solution System Portal",
			items: [
				{
					to: "/hub",
					label: "Desk"
				},
				{
					to: "/ssp",
					label: "Overview"
				},
				{
					to: "/ssp/festivals",
					label: "Tenants"
				},
				{
					to: "/ssp/applications",
					label: "Applications"
				},
				{
					to: "/ssp/analytics",
					label: "Economics"
				},
				{
					to: "/ssp/organizations",
					label: "Organizations"
				},
				{
					to: "/ssp/users",
					label: "Users"
				}
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
	}) });
}
//#endregion
export { SspLayout as component };
