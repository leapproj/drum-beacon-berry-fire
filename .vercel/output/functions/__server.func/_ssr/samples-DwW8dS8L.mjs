import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as SiteNav, t as SiteFooter } from "./site-nav-KvYuh7sV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/samples-DwW8dS8L.js
var import_jsx_runtime = require_jsx_runtime();
var SAMPLES = [{
	name: "Higalaay Festival",
	place: "Cagayan de Oro",
	live: "https://higalaayfestival.com",
	slug: "higalaay-2026",
	note: "Visitor-first festival website: programme, place, partners, participation. Case study on TukodPH."
}, {
	name: "Diyandi Festival 2026",
	place: "Iligan",
	live: "https://tukodph.com/diyandi/",
	slug: "diyandi-2026",
	note: "CMS microsite with pathways — schedule, visitor days, story, volunteer. Digital co-partner model."
}];
function SamplesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-4xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.28em] text-muted uppercase",
						children: "TukodPH CMS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl tracking-tight",
						children: "Festival websites"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted",
						children: "Tenants build public sites in the Organizer Command Center with a WordPress-like CMS — the same control desk used at cms.tukodph.com. Structure over spectacle: discover, understand, plan, participate."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2",
						children: SAMPLES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: s.place
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-display text-2xl",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: s.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/f/$slug",
										params: { slug: s.slug },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											children: "Open tenant site"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: s.live,
										target: "_blank",
										rel: "noreferrer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											children: "Live on the web"
										})
									})]
								})
							]
						}, s.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-10 text-sm text-muted",
						children: [
							"CMS control desk:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://cms.tukodph.com",
								className: "underline-offset-4 hover:underline",
								children: "cms.tukodph.com"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { SamplesPage as component };
