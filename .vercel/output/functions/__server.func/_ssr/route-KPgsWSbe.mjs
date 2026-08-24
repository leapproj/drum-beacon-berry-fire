import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { m as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as Route$26 } from "./router-DBpYOzCD.mjs";
import { n as OperatorGate, o as useOperatorProfile } from "./operator-gate-X6EzhcLg.mjs";
import { i as TopBar } from "./shell-BRN3PYI4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-KPgsWSbe.js
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const { festivalId } = Route$26.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminChrome, {
		festivalId,
		params: { festivalId }
	}) });
}
function AdminChrome({ festivalId, params: p }) {
	const items = [
		{
			to: "/hub",
			label: "Desk"
		},
		...useOperatorProfile()?.kind === "ssp" ? [{
			to: "/ssp",
			label: "SSP"
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
			kicker: "Command center",
			items
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
	});
}
//#endregion
export { AdminLayout as component };
