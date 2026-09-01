import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Wordmark } from "./brand-Dm4ORxGo.mjs";
import { r as OperatorHomeLink } from "./operator-gate-D0cHrcyf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-nav-Xeocwsdd.js
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		to: "/product",
		label: "Product"
	},
	{
		to: "/packages",
		label: "Packages"
	},
	{
		to: "/festivals",
		label: "Festivals"
	},
	{
		to: "/samples",
		label: "Websites"
	},
	{
		to: "/apply",
		label: "Apply"
	}
];
function SiteNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fiesta-ribbon" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "rounded-md px-3 py-2 text-sm text-muted hover:text-fg [&.active]:text-fg",
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorHomeLink, {})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-2 md:hidden",
			children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: l.to,
				className: "shrink-0 rounded-md px-3 py-2 text-sm text-muted hover:text-fg [&.active]:text-fg",
				children: l.label
			}, l.to))
		})
	] });
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "eSAULOG DFEMS · a TukodPH product" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-subtle",
				children: [
					"From signal to shipped.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://tukodph.com",
						className: "text-fg underline-offset-4 hover:underline",
						children: "tukodph.com"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/ssp/login",
						className: "text-fg underline-offset-4 hover:underline",
						children: "Headquarters"
					})
				]
			})]
		})
	});
}
//#endregion
export { SiteNav as n, SiteFooter as t };
