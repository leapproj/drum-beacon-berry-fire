import { r as php } from "./format-CP3TpnOc.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as SiteNav, t as SiteFooter } from "./site-nav-Xeocwsdd.mjs";
import { l as listPackages } from "./erp-D21E2W5T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages-BVv3gdwO.js
var import_jsx_runtime = require_jsx_runtime();
function PackagesPage() {
	const { data } = useQuery({
		queryKey: ["packages"],
		queryFn: () => listPackages()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.28em] text-muted uppercase",
						children: "Licenses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl tracking-tight",
						children: "Packages"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted",
						children: "Season licenses for organizers who want to run eSAULOG themselves — and a co-partner option when you want TukodPH to create and manage the digital festival."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 lg:grid-cols-2",
						children: (data ?? []).map((p) => {
							const features = JSON.parse(p.features_json || "[]");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-wide text-muted uppercase",
										children: p.kind === "copartner" ? "Value proposition" : "Self-serve"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-3xl",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-display text-2xl tabular-nums",
										children: p.price_php > 0 ? php(p.price_php) : "Commission"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-subtle",
										children: p.billing
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-muted",
										children: p.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 space-y-1.5 text-sm",
										children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "text-muted",
											children: f
										}, f))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/apply",
										search: { package: p.slug },
										className: "mt-6 inline-block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: p.kind === "copartner" ? "default" : "outline",
											children: p.kind === "copartner" ? "Sign up — co-partner at publish" : "Sign up as tenant"
										})
									})
								]
							}, p.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { PackagesPage as component };
