import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as cn } from "./brand-Dm4ORxGo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-t968lKA4.js
var import_jsx_runtime = require_jsx_runtime();
function Progress({ value, className }) {
	const v = Math.max(0, Math.min(100, value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-1.5 w-full overflow-hidden rounded-full bg-fg/10", className),
		role: "progressbar",
		"aria-valuenow": v,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-accent transition-[width] duration-300 ease-out",
			style: { width: `${v}%` }
		})
	});
}
//#endregion
export { Progress as t };
