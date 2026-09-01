import { o as __toESM } from "./_runtime.mjs";
import { i as rangeLabel } from "./_ssr/format-CP3TpnOc.mjs";
import { o as require_jsx_runtime, s as require_react } from "./_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as ScanLine, o as QrCode, r as Store, u as Globe } from "./_libs/lucide-react.mjs";
import { n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { _ as Route$26 } from "./_ssr/router-5l7utmBS.mjs";
import { t as Button } from "./_ssr/button-TdAqEUQT.mjs";
import { i as Textarea, n as Label, t as Input } from "./_ssr/input-DJUt6prj.mjs";
import { t as StatusBadge } from "./_ssr/status-badge-BpSBK1zA.mjs";
import { n as SiteNav, t as SiteFooter } from "./_ssr/site-nav-Xeocwsdd.mjs";
import { a as submitPartnerRequest, t as getFestivalHub } from "./_ssr/public-afjHg-9_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-z7kTu3fR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FestivalDetail() {
	const { slug } = Route$26.useParams();
	const { data, isPending } = useQuery({
		queryKey: ["hub", slug],
		queryFn: () => getFestivalHub({ data: slug })
	});
	const [partner, setPartner] = (0, import_react.useState)({
		kind: "sponsor",
		organization_name: "",
		contact_name: "",
		contact_email: "",
		notes: ""
	});
	const ask = useMutation({
		mutationFn: () => submitPartnerRequest({ data: {
			slug,
			...partner
		} }),
		onSuccess: () => toast.success("Partnership request sent to the organizer."),
		onError: (e) => toast.error(e.message)
	});
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-5xl px-4 py-16 text-muted",
			children: "Loading festival…"
		})]
	});
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-5xl px-4 py-16",
			children: "Festival not found."
		})]
	});
	const { festival: f, events, keys, sponsors } = data;
	const demoKey = keys[0]?.code;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 place-items-center rounded-md bg-surface-2 font-display text-xl text-accent",
							children: f.logo_text
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: f.status })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 font-display text-5xl tracking-tight",
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
							f.ends_on,
							" · ",
							f.timezone
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-sm text-muted",
						children: f.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/p",
								className: "flex gap-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mt-1 size-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: "Get ePASS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: "Register as a participant and receive a digital or printable pass."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/gate",
								search: {
									festival: slug,
									code: demoKey
								},
								className: "flex gap-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, { className: "mt-1 size-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: "Enter gate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted",
									children: ["Ushers and usherettes use an event access key. Demo: ", demoKey ?? "issued in command center"]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#partner",
								className: "flex gap-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "mt-1 size-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: "Become a festival partner"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: "Sponsors, vendors, and MSMEs — request a listing."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/f/$slug",
								params: { slug },
								className: "flex gap-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "mt-1 size-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: "Festival website"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: "Public CMS site built in the TukodPH command center."
								})] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-14 font-display text-3xl",
						children: "Programme"
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
									e.venue_name ?? "Venue TBA",
									" · ",
									rangeLabel(e.starts_at, e.ends_at),
									" · ",
									e.event_type
								]
							})]
						}, e.id))
					}),
					keys.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-14 font-display text-3xl",
							children: "Gate access keys"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Demo keys for ushers and usherettes. Staff do not need an account."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
							children: keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-sm",
									children: k.code
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										k.event_name,
										" · ",
										k.staff_role
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/gate",
									search: {
										festival: slug,
										code: k.code
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										children: "Enter gate"
									})
								})]
							}, k.id))
						})
					] }) : null,
					sponsors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-14 font-display text-3xl",
						children: "Sponsors"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: sponsors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-surface-2 px-3 py-1 text-sm",
							children: s.name
						}, s.id))
					})] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "partner",
						className: "mt-14 scroll-mt-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: "Become a partner"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "Sponsor, vendor, or MSME booster listing."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-6 grid max-w-lg gap-3",
								onSubmit: (e) => {
									e.preventDefault();
									ask.mutate();
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "h-11 rounded-md border border-border bg-surface-2 px-3 text-sm",
											value: partner.kind,
											onChange: (e) => setPartner({
												...partner,
												kind: e.target.value
											}),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "sponsor",
													children: "Sponsor"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "vendor",
													children: "Vendor"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "msme",
													children: "MSME"
												})
											]
										})]
									}),
									[
										["organization_name", "Organization"],
										["contact_name", "Contact name"],
										["contact_email", "Email"]
									].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											required: true,
											type: key.includes("email") ? "email" : "text",
											value: partner[key],
											onChange: (e) => setPartner({
												...partner,
												[key]: e.target.value
											})
										})]
									}, key)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: partner.notes,
											onChange: (e) => setPartner({
												...partner,
												notes: e.target.value
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										disabled: ask.isPending,
										children: ask.isPending ? "Sending…" : "Request partnership"
									})
								]
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
export { FestivalDetail as component };
