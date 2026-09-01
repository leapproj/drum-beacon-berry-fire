import { r as php, t as compact } from "./format-CP3TpnOc.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { t as StatusBadge } from "./status-badge-BpSBK1zA.mjs";
import { n as SiteNav, t as SiteFooter } from "./site-nav-Xeocwsdd.mjs";
import { n as getHomeData } from "./public-afjHg-9_.mjs";
import { l as listPackages } from "./erp-D21E2W5T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DpT5jW0G.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { data } = useQuery({
		queryKey: ["home"],
		queryFn: () => getHomeData()
	});
	const pkgs = useQuery({
		queryKey: ["packages"],
		queryFn: () => listPackages()
	});
	const stats = data?.stats;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sunburst min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 pt-10 pb-16 sm:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.28em] text-muted uppercase",
						children: "TukodPH · eSAULOG DFEMS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl",
						children: "The operating system for Philippine festivals."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 max-w-xl text-base text-muted sm:text-lg",
						children: [
							"A SaaS ERP for LGUs and organizers: apply as a tenant, buy a package, draft the whole festival until it is ready, then run physical and digital operations from one command center. Built by",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://tukodph.com",
								className: "text-fg underline-offset-4 hover:underline",
								children: "TukodPH"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/apply",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									children: ["Apply as tenant", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/festivals",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									variant: "outline",
									children: "Browse festivals"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/packages",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									variant: "outline",
									children: "View packages"
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-surface/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-5",
					children: [
						["Live tenants", stats?.festivals ?? "—"],
						["Participants", stats ? compact(stats.participants) : "—"],
						["Events", stats ? compact(stats.events) : "—"],
						["Vendors", stats ? compact(stats.vendors) : "—"],
						["Check-ins", stats ? compact(stats.checkins) : "—"]
					].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-wide text-muted uppercase",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-2xl tabular-nums sm:text-3xl",
							children: value
						})]
					}, label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] text-muted uppercase",
						children: "How tenants work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl tracking-tight sm:text-4xl",
						children: "From first question to a live festival tenant."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-3 md:grid-cols-4",
						children: [
							{
								n: "01",
								t: "Read the product",
								d: "eSAULOG DFEMS is the festival ERP. TukodPH is the company that ships it."
							},
							{
								n: "02",
								t: "Apply & choose a package",
								d: "Self-serve licenses, or ask TukodPH to co-partner the digital festival at 30%."
							},
							{
								n: "03",
								t: "Draft until complete",
								d: "Calendar, sponsors, CMS website, participant and gate portals — saved as draft."
							},
							{
								n: "04",
								t: "Command & measure",
								d: "HQ sees turnout, income, and sponsor analytics across every tenant."
							}
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-muted",
									children: c.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-medium",
									children: c.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: c.d
								})
							]
						}, c.n))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] text-muted uppercase",
						children: "Packages"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl tracking-tight",
						children: "Buy the season you need"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/packages",
						className: "text-sm text-muted hover:text-fg",
						children: "Compare all"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: (pkgs.data ?? []).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/packages",
						className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-wide text-muted uppercase",
								children: p.kind.replace("_", " ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-xl tabular-nums",
								children: p.price_php > 0 ? php(p.price_php) : "30% digital"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-subtle",
								children: p.billing
							})
						]
					}, p.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] text-muted uppercase",
						children: "Festival tenants"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl tracking-tight",
						children: "On the platform"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: (data?.festivals ?? []).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/f/$slug",
							params: { slug: f.slug },
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 place-items-center rounded-md bg-surface-2 font-display text-lg",
										children: f.logo_text
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: f.status })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl tracking-tight",
									children: f.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted",
									children: [
										f.city,
										", ",
										f.province
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-subtle",
									children: f.tagline
								})
							]
						}, f.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
