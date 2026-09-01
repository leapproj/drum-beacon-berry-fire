import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Wordmark, r as cn } from "./brand-Dm4ORxGo.mjs";
import { t as OperatorButton } from "./operator-gate-D0cHrcyf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-GkA-jbwc.js
var import_jsx_runtime = require_jsx_runtime();
function TopBar({ kicker, items, trailing }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fiesta-ribbon" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-14 max-w-6xl items-center gap-4 px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
					}),
					kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-xs tracking-[0.18em] text-muted uppercase sm:inline",
						children: kicker
					}) : null,
					items && items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-2 hidden min-w-0 flex-1 items-center gap-1 overflow-x-auto md:flex",
						children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							params: item.params,
							className: "rounded-md px-2.5 py-1.5 text-sm text-muted hover:bg-surface-2 hover:text-fg [&.active]:text-accent",
							activeOptions: { exact: item.to.split("/").length <= 2 },
							children: item.label
						}, item.to + JSON.stringify(item.params ?? {}) + item.label))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-3",
						children: [trailing, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorButton, {})]
					})
				]
			}),
			items && items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex gap-1 overflow-x-auto border-t border-border px-3 py-2 md:hidden",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					params: item.params,
					className: "shrink-0 rounded-md px-3 py-2 text-sm text-muted hover:bg-surface-2 hover:text-fg [&.active]:bg-surface-2 [&.active]:text-fg",
					children: item.label
				}, item.to + item.label))
			}) : null
		]
	});
}
function Page({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: cn("mx-auto w-full max-w-6xl px-4 py-8", className),
		children
	});
}
function PageHeader({ eyebrow, title, description, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs tracking-[0.2em] text-muted uppercase",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl tracking-tight text-fg sm:text-4xl",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted",
				children: description
			}) : null
		] }), actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: actions
		}) : null]
	});
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-wide text-muted uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-3xl tabular-nums tracking-tight",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-subtle",
				children: hint
			}) : null
		]
	});
}
//#endregion
export { TopBar as i, PageHeader as n, Stat as r, Page as t };
