import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { d as useRouterState, m as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SspGate } from "./operator-gate-D0cHrcyf.mjs";
import { i as TopBar } from "./shell-GkA-jbwc.mjs";
import { r as HqOperatorStrip, t as HQ_NAV } from "./hq-chrome-DmY1AtHp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-erS26AbT.js
var import_jsx_runtime = require_jsx_runtime();
function SspLayout() {
	if (useRouterState({ select: (s) => s.location.pathname }) === "/ssp/login") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SspGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			kicker: "TukodPH Super Admin HQ",
			items: HQ_NAV,
			trailing: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HqOperatorStrip, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
	}) });
}
//#endregion
export { SspLayout as component };
