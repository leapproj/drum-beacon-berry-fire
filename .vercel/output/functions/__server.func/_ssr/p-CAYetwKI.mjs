import { o as __toESM } from "../_runtime.mjs";
import { i as rangeLabel } from "./format-C77s4pFp.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as cn, t as EsaulogMark } from "./brand-Dm4ORxGo.mjs";
import { i as TopBar, n as PageHeader, t as Page } from "./shell-BRN3PYI4.mjs";
import { i as createServerFn } from "./ssr2.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B2Izd0c7.mjs";
import { t as StatusBadge } from "./status-badge-CQBhovZh.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { t as authMiddleware } from "./middleware-CMv0U7Tv.mjs";
import { t as AuthGate } from "./auth-gate-BiYxhl5h.mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/p-CAYetwKI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
function EpassCard({ festivalName, participantName, credentialId, payload, city }) {
	const [src, setSrc] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		import_lib.toDataURL(payload, {
			width: 280,
			margin: 1,
			color: {
				dark: "#161714",
				light: "#f3efe4"
			}
		}).then(setSrc);
	}, [payload]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "epass-print mx-auto w-full max-w-sm overflow-hidden rounded-xl bg-paper text-ink shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-ink/10 px-5 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] tracking-[0.22em] uppercase",
				children: festivalName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EsaulogMark, { className: "size-6 text-ink" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-ink/50 uppercase",
					children: "Participant"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl tracking-tight",
					children: participantName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-sm tabular-nums",
					children: credentialId
				}),
				city ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-ink/50",
					children: city
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid place-items-center rounded-lg bg-paper p-3",
					children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "ePASS QR",
						className: "size-44"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-44 animate-pulse bg-ink/10" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-[10px] tracking-[0.2em] text-ink/50 uppercase",
					children: "eSAULOG ePASS"
				})
			]
		})]
	});
}
var Tabs = Root2;
function TabsList({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
		className: cn("inline-flex h-11 items-center gap-1 rounded-lg bg-surface-2 p-1", className),
		...props
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		className: cn("inline-flex h-9 items-center justify-center rounded-md px-3 text-sm text-muted transition-colors data-[state=active]:bg-surface data-[state=active]:text-fg data-[state=active]:shadow-[var(--shadow-border)]", className),
		...props
	});
}
function TabsContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
		className: cn("mt-4 outline-none", className),
		...props
	});
}
var bootstrapWorkspace = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("cc9077b886bef3a49f3703748d3c56048ba7d66679dcd19fa5b40a0268f83980"));
var getParticipantHome = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("9e872de8911a4da765c701ff59cadfb62d14017aa4c52e9d5cb9cd4b6129f485"));
var registerForEvent = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((eventId) => eventId).handler(createSsrRpc("cd236fc19e0abc85cadeaa8edfe5f3968aaf84acca09046383b902acb473fa51"));
var selfCheckIn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((eventId) => eventId).handler(createSsrRpc("9229c1474bf20cfe2c4f7a215a9fe59a37fd37434eae1b8587c19cc46f459509"));
var castVote = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("93835dd2a8c06a760650d2adcb33c3604c5ece8afdaa5a0f3339d899ab03da0b"));
var claimReward = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((rewardId) => rewardId).handler(createSsrRpc("ef19817eceed4246e2e2941a26497e977ba47ba0f4fa0281b4c170fe65a86f3b"));
var issueCoupon = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((offerId) => offerId).handler(createSsrRpc("a800e7d50fc7ed0c555dd0d2ddee363f1f86d2eae85cc7d3823c9d0e804d1d13"));
function ParticipantPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {}) });
}
function Portal() {
	const qc = useQueryClient();
	const boot = useMutation({ mutationFn: () => bootstrapWorkspace() });
	(0, import_react.useEffect)(() => {
		boot.mutate();
	}, []);
	const { data } = useQuery({
		queryKey: ["portal"],
		queryFn: () => getParticipantHome(),
		enabled: boot.isSuccess
	});
	const [print, setPrint] = (0, import_react.useState)(false);
	const reg = useMutation({
		mutationFn: (id) => registerForEvent({ data: id }),
		onSuccess: () => {
			toast.success("Registered");
			qc.invalidateQueries({ queryKey: ["portal"] });
		}
	});
	const cin = useMutation({
		mutationFn: (id) => selfCheckIn({ data: id }),
		onSuccess: (res) => {
			if (!res.ok) toast.error(res.reason);
			else toast.success("Checked in");
			qc.invalidateQueries({ queryKey: ["portal"] });
		}
	});
	const vote = useMutation({
		mutationFn: (choice) => castVote({ data: {
			eventId: "evt_kahimunan",
			choice
		} }),
		onSuccess: () => toast.success("Vote recorded")
	});
	const coupon = useMutation({
		mutationFn: (id) => issueCoupon({ data: id }),
		onSuccess: (res) => toast.success(`Coupon ${res.code}`)
	});
	const reward = useMutation({
		mutationFn: (id) => claimReward({ data: id }),
		onSuccess: () => {
			toast.success("Reward claimed");
			qc.invalidateQueries({ queryKey: ["portal"] });
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { kicker: "Participant" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Discover · Join · Participate · Earn · Explore",
				title: data?.festival?.name ?? "Festival experience",
				description: data?.festival?.tagline
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "discover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "w-full justify-start overflow-x-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "discover",
								children: "Discover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "join",
								children: "Join"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "participate",
								children: "Participate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "earn",
								children: "Earn"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "explore",
								children: "Explore"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "discover",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3",
							children: (data?.events ?? []).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted uppercase",
											children: e.category_name ?? e.event_type
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl",
											children: e.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-sm text-muted",
											children: [
												e.venue_name,
												" · ",
												rangeLabel(e.starts_at, e.ends_at)
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: e.status })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: e.description
								})]
							}, e.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "join",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 lg:grid-cols-[1fr_20rem]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: (data?.events ?? []).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: e.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted",
										children: [e.access_mode, " access"]
									})] }), e.registered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-ok",
										children: "Registered"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										onClick: () => reg.mutate(e.id),
										children: "Register"
									})]
								}, e.id))
							}), data?.epass && data.participant ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EpassCard, {
								festivalName: data.festival?.name ?? "Festival",
								participantName: data.participant.full_name,
								credentialId: data.epass.credential_id,
								payload: data.epass.qr_payload
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-3 w-full",
								variant: "outline",
								onClick: () => {
									setPrint(true);
									setTimeout(() => window.print(), 250);
								},
								children: "Print ePASS"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Provisioning your ePASS…"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "participate",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [(data?.events ?? []).filter((e) => e.registered).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: e.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: "Self check-in for open venues"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									onClick: () => cin.mutate(e.id),
									children: "Check in"
								})]
							}, e.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-wide text-muted uppercase",
										children: "People’s Choice"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-2xl",
										children: "Kahimunan Street Dance"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-wrap gap-2",
										children: [
											"Barangay Carmen",
											"Barangay Lapasan",
											"Barangay Macasandig"
										].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											onClick: () => vote.mutate(c),
											children: c
										}, c))
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "earn",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-4 text-sm text-muted",
								children: [
									"You have ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-fg",
										children: data?.points ?? 0
									}),
									" points"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 md:grid-cols-2",
								children: (data?.missions ?? []).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: m.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: m.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 text-xs text-subtle",
											children: [
												m.points,
												" pts · ",
												m.badge_name,
												" · ",
												m.progress,
												"/",
												m.condition_value
											]
										})
									]
								}, m.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-8 font-display text-2xl",
								children: "Rewards"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 grid gap-3 sm:grid-cols-3",
								children: (data?.rewards ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: r.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted",
											children: [r.points_cost, " pts"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											className: "mt-3",
											size: "sm",
											onClick: () => reward.mutate(r.id),
											children: "Claim"
										})
									]
								}, r.id))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "explore",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: (data?.vendors ?? []).map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium",
												children: v.name
											}), v.booster === "booster" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-ok",
												children: "Booster"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted",
												children: "Listing"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: v.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-subtle",
											children: v.location
										})
									]
								}, v.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-8 font-display text-2xl",
								children: "Coupons"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 space-y-3",
								children: (data?.offers ?? []).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: o.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: o.vendor_name
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										onClick: () => coupon.mutate(o.id),
										children: "Issue"
									})]
								}, o.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-sm text-muted",
								children: "Dayu will extend this rail into lodging, restaurants, and island itineraries."
							})
						]
					})
				]
			})] }),
			print ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@media print { body * { visibility: hidden } .epass-print, .epass-print * { visibility: visible } .epass-print { position: absolute; inset: 0; } }` }) : null
		]
	});
}
//#endregion
export { ParticipantPage as component };
