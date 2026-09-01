import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as statusTone, t as Badge } from "./badge-C9WJniDN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-badge-BpSBK1zA.js
var import_jsx_runtime = require_jsx_runtime();
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: statusTone(status),
		children: status
	});
}
//#endregion
export { StatusBadge as t };
