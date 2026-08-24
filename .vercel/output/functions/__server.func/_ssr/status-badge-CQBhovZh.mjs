import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn } from "./brand-Dm4ORxGo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-badge-CQBhovZh.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase", {
	variants: { tone: {
		default: "bg-fg/10 text-fg",
		live: "bg-ok/15 text-ok",
		setup: "bg-warn/15 text-warn",
		draft: "bg-muted/15 text-muted",
		planning: "bg-fg/8 text-muted",
		danger: "bg-danger/15 text-danger"
	} },
	defaultVariants: { tone: "default" }
});
function Badge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ tone }), className),
		...props
	});
}
function statusTone(status) {
	const s = status.toUpperCase();
	if (s === "LIVE" || s === "ACTIVE" || s === "PUBLISHED" || s === "VALID") return "live";
	if (s === "SETUP" || s === "WARN") return "setup";
	if (s === "DRAFT") return "draft";
	if (s === "PLANNING" || s === "COMPLETED") return "planning";
	if (s === "INVALID" || s === "REVOKED") return "danger";
	return "default";
}
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: statusTone(status),
		children: status
	});
}
//#endregion
export { StatusBadge as t };
