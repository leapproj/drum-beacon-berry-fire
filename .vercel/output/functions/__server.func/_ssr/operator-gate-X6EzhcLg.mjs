import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./brand-Dm4ORxGo.mjs";
import { n as getOperatorProfile, t as clearOperatorSession } from "./operator-session-B3mLSVbp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/operator-gate-X6EzhcLg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Skeleton({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("animate-pulse rounded-md bg-fg/8", className) });
}
function useOperatorProfile() {
	const [profile, setProfile] = (0, import_react.useState)(void 0);
	(0, import_react.useEffect)(() => {
		setProfile(getOperatorProfile());
	}, []);
	return profile;
}
function OperatorGate({ children }) {
	const profile = useOperatorProfile();
	const nav = useNavigate();
	(0, import_react.useEffect)(() => {
		if (profile === null) nav({ to: "/login" });
	}, [profile, nav]);
	if (profile === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GateSkeleton, {});
	if (!profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GateSkeleton, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function SspGate({ children }) {
	const profile = useOperatorProfile();
	const nav = useNavigate();
	(0, import_react.useEffect)(() => {
		if (profile === null) nav({ to: "/ssp/login" });
		else if (profile && profile.kind !== "ssp") nav({ to: "/hub" });
	}, [profile, nav]);
	if (profile === void 0 || !profile || profile.kind !== "ssp") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GateSkeleton, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function GateSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-bg p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-48" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-40 w-full rounded-xl" })]
		})
	});
}
function OperatorButton() {
	const profile = useOperatorProfile();
	const nav = useNavigate();
	if (!profile) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden max-w-[10rem] truncate text-xs text-muted sm:inline",
			children: profile.display_name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "rounded-md px-3 py-2 text-sm text-muted hover:bg-surface-2 hover:text-fg",
			onClick: () => {
				clearOperatorSession();
				nav({ to: "/" });
			},
			children: "Sign out"
		})]
	});
}
function OperatorHomeLink() {
	const profile = useOperatorProfile();
	if (!profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/login",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-fg",
			children: "Sign in"
		})
	});
	if (profile.kind === "ssp") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/ssp",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-fg",
			children: "SSP"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/hub",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-fg",
			children: "Command center"
		})
	});
}
//#endregion
export { SspGate as a, Skeleton as i, OperatorGate as n, useOperatorProfile as o, OperatorHomeLink as r, OperatorButton as t };
