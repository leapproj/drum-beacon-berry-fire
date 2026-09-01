import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as useOperatorProfile } from "./operator-gate-D0cHrcyf.mjs";
import { t as Badge } from "./badge-C9WJniDN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hq-chrome-DmY1AtHp.js
var import_jsx_runtime = require_jsx_runtime();
var HQ_NAV = [
	{
		to: "/ssp",
		label: "Dashboard"
	},
	{
		to: "/ssp/festivals",
		label: "Tenants"
	},
	{
		to: "/ssp/events",
		label: "Events"
	},
	{
		to: "/ssp/applications",
		label: "Intake"
	},
	{
		to: "/ssp/analytics",
		label: "Intelligence"
	},
	{
		to: "/ssp/network",
		label: "Network"
	},
	{
		to: "/ssp/users",
		label: "Access Keys"
	},
	{
		to: "/hub",
		label: "Desk"
	}
];
var HQ_TITLES = {
	tukodph_van: "Product Lead",
	tukodph_lanz: "Platform Operations",
	tukodph_marc: "Festival Operations"
};
var HQ_OPERATOR_META = {
	tukodph_van: {
		title: "Product Lead",
		desk: "SSP architecture, product, and Super Admin policy."
	},
	tukodph_lanz: {
		title: "Platform Operations",
		desk: "Tenant licenses, intake, and network operations."
	},
	tukodph_marc: {
		title: "Festival Operations",
		desk: "Co-partner seasons, events, gates, and go-live."
	}
};
var HQ_SCOPE = [
	{
		title: "Create as co-partner",
		body: "Provision a festival tenant. TukodPH operates the digital festival at 30% of digital sponsor income."
	},
	{
		title: "Manage festivals",
		body: "Identity, status, license, command center, CMS, staff, gates, and publish for every tenant."
	},
	{
		title: "Manage events",
		body: "Create, publish, and open the program across the whole network."
	},
	{
		title: "Dashboard",
		body: "Live tenants, turnout, income, pending intake, and Super Admin roster in one Headquarters view."
	},
	{
		title: "Business intelligence",
		body: "Turnout, conversion, sponsor mix, income ledger, and co-partner commission (digital only)."
	},
	{
		title: "Full SSP access",
		body: "Intake, network, organizations, access keys, and every tenant command center."
	}
];
function hqTitle(username) {
	if (!username) return "Super Admin";
	return HQ_TITLES[username] ?? "Super Admin";
}
function hqDesk(username) {
	if (!username) return "Full Solution System Portal.";
	return HQ_OPERATOR_META[username]?.desk ?? "Full Solution System Portal.";
}
function HqOperatorStrip() {
	const profile = useOperatorProfile();
	if (!profile) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "live",
				children: "Super Admin"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-fg",
				children: profile.display_name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden text-muted sm:inline",
				children: hqTitle(profile.username)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden font-mono text-xs text-muted lg:inline",
				children: profile.username
			})
		]
	});
}
//#endregion
export { hqTitle as a, hqDesk as i, HQ_SCOPE as n, HqOperatorStrip as r, HQ_NAV as t };
