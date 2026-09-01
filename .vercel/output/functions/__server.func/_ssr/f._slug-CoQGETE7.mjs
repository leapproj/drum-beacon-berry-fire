import { i as rangeLabel } from "./format-CP3TpnOc.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { v as Route$28 } from "./router-5l7utmBS.mjs";
import { n as Wordmark } from "./brand-Dm4ORxGo.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { t as StatusBadge } from "./status-badge-BpSBK1zA.mjs";
import { r as getPublicFestival } from "./public-afjHg-9_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/f._slug-CoQGETE7.js
var import_jsx_runtime = require_jsx_runtime();
function PublicFestival() {
	const { slug } = Route$28.useParams();
	const { data, isPending } = useQuery({
		queryKey: ["fest", slug],
		queryFn: () => getPublicFestival({ data: slug })
	});
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "theme-paper min-h-screen p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Loading festival…" })
	});
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "theme-paper min-h-screen p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Festival not found." })
	});
	const { festival: f, pages, events, vendors, sponsors, blocks } = data;
	const about = pages.find((p) => p.slug === "about");
	const guide = pages.find((p) => p.slug === "guide");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "theme-paper min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto flex max-w-5xl items-center justify-between px-4 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						children: "Get ePASS"
					})
				})]
			}),
			blocks.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl px-4 py-8",
				children: blocks.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmsBlockView, { block: b }, b.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 place-items-center rounded-md bg-surface-2 font-display text-xl",
							children: f.logo_text
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: f.status })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 font-display text-5xl tracking-tight sm:text-6xl",
						children: f.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-lg text-muted",
						children: f.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-subtle",
						children: [
							f.city,
							", ",
							f.province,
							" · ",
							f.starts_on,
							" – ",
							f.ends_on
						]
					})
				]
			}),
			events.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-4 pb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Program"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Mark the moments you cannot miss."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
						children: events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: e.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: e.status })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									e.venue_name,
									" · ",
									rangeLabel(e.starts_at, e.ends_at),
									" · ",
									e.event_type
								]
							})]
						}, e.id))
					})
				]
			}) : null,
			about ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-4 pb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: about.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: about.body
				})]
			}) : null,
			vendors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-4 pb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Beyond the parade"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: vendors.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: v.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: v.description
						})]
					}, v.id))
				})]
			}) : null,
			sponsors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-4 pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Festival partners"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: sponsors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-surface-2 px-4 py-2 text-sm shadow-[var(--shadow-border)]",
							children: s.name
						}, s.id))
					}),
					guide ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-sm text-muted",
						children: guide.body
					}) : null
				]
			}) : null
		]
	});
}
function CmsBlockView({ block }) {
	if (block.kind === "hero") {
		let kicker = "";
		try {
			kicker = JSON.parse(block.meta_json || "{}").kicker ?? "";
		} catch {
			kicker = "";
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "pb-10",
			children: [
				kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.22em] text-muted uppercase",
					children: kicker
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl tracking-tight sm:text-6xl",
					children: block.heading
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg text-muted",
					children: block.body
				})
			]
		});
	}
	if (block.kind === "pathways") {
		let items = [];
		try {
			items = JSON.parse(block.meta_json || "[]");
		} catch {
			items = [];
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: block.heading
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: block.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2",
					children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-muted",
								children: it.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-medium",
								children: it.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: it.body
							})
						]
					}, it.n))
				})
			]
		});
	}
	if (block.kind === "stats") {
		let stats = [];
		try {
			stats = JSON.parse(block.meta_json || "[]");
		} catch {
			stats = [];
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: block.heading
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: block.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-3 gap-3",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl tabular-nums",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: s.label
					})] }, s.label))
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pb-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl",
			children: block.heading
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-muted",
			children: block.body
		})]
	});
}
//#endregion
export { PublicFestival as component };
