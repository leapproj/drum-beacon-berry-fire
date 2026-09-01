import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { m as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as Route$29 } from "./router-5l7utmBS.mjs";
import { n as OperatorGate, o as useOperatorProfile } from "./operator-gate-D0cHrcyf.mjs";
import { i as TopBar } from "./shell-GkA-jbwc.mjs";
import { r as HqOperatorStrip } from "./hq-chrome-DmY1AtHp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-BT9biIvd.js
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const { festivalId } = Route$29.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminChrome, {
		festivalId,
		params: { festivalId }
	}) });
}
function AdminChrome({ festivalId, params: p }) {
	const hq = useOperatorProfile()?.kind === "ssp";
	const items = [
		{
			to: "/hub",
			label: "Desk"
		},
		...hq ? [{
			to: "/ssp",
			label: "Back to HQ"
		}] : [],
		{
			to: "/admin/$festivalId",
			params: p,
			label: "Command"
		},
		{
			to: "/admin/$festivalId/planning",
			params: p,
			label: "Plan"
		},
		{
			to: "/admin/$festivalId/events",
			params: p,
			label: "Events"
		},
		{
			to: "/admin/$festivalId/cms",
			params: p,
			label: "CMS"
		},
		{
			to: "/admin/$festivalId/participants",
			params: p,
			label: "People"
		},
		{
			to: "/admin/$festivalId/staff",
			params: p,
			label: "Staff"
		},
		{
			to: "/admin/$festivalId/venues",
			params: p,
			label: "Venues"
		},
		{
			to: "/admin/$festivalId/gates",
			params: p,
			label: "Gates"
		},
		{
			to: "/admin/$festivalId/publish",
			params: p,
			label: "Publish"
		},
		{
			to: "/admin/$festivalId/analytics",
			params: p,
			label: "Analytics"
		},
		{
			to: "/admin/$festivalId/ai",
			params: p,
			label: "AI"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			kicker: hq ? "HQ · Command center" : "Command center",
			items,
			trailing: hq ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HqOperatorStrip, {}) : void 0
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
	});
}
//#endregion
export { AdminLayout as component };
