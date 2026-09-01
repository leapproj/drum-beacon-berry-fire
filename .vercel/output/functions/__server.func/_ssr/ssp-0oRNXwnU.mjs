import { o as __toESM } from "../_runtime.mjs";
import { a as shortDay, o as stampLabel, r as php, t as compact } from "./format-CP3TpnOc.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as KeyRound, d as ChartColumn, f as CalendarDays, i as Shield, l as Inbox, p as Building2, s as Network } from "../_libs/lucide-react.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as Skeleton } from "./operator-gate-D0cHrcyf.mjs";
import { n as PageHeader, r as Stat, t as Page } from "./shell-GkA-jbwc.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { t as StatusBadge } from "./status-badge-BpSBK1zA.mjs";
import { i as getSspOverview, n as getSspIntelligence, o as hqGoLive } from "./ssp-BRJpZopk.mjs";
import { a as CartesianGrid, c as Cell, i as XAxis, l as ResponsiveContainer, n as BarChart, o as Bar, r as YAxis, s as Pie, t as PieChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
import { t as CreateCopartnerDialog } from "./hq-create-festival-CGBSrMLZ.mjs";
import { a as hqTitle, i as hqDesk, n as HQ_SCOPE } from "./hq-chrome-DmY1AtHp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ssp-0oRNXwnU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TOOLTIP = {
	background: "var(--color-surface)",
	border: "1px solid var(--color-border)",
	color: "var(--color-fg)",
	borderRadius: 8,
	fontSize: 12
};
function SspHome() {
	const qc = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: ["ssp"],
		queryFn: () => getSspOverview()
	});
	const intel = useQuery({
		queryKey: ["ssp-intel"],
		queryFn: () => getSspIntelligence()
	});
	const [open, setOpen] = (0, import_react.useState)(false);
	const s = data?.stats;
	const pending = (data?.apps ?? []).filter((a) => a.status === "pending");
	const requested = (data?.agreements ?? []).filter((a) => a.status === "requested");
	const drafts = (data?.festivals ?? []).filter((f) => [
		"DRAFT",
		"PLANNING",
		"SETUP"
	].includes(f.status));
	const goLive = useMutation({
		mutationFn: (id) => hqGoLive({ data: { id } }),
		onSuccess: () => {
			toast.success("Festival is live");
			qc.invalidateQueries({ queryKey: ["ssp"] });
			qc.invalidateQueries({ queryKey: ["ssp-intel"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const chart = (intel.data?.byFestival ?? []).map((f) => ({
		name: String(f.name).replace(/ 20\d\d/, ""),
		turnout: f.turnout,
		checkins: f.checkins,
		digital: f.digital,
		commission: f.copartner ? Math.round(f.digital * .3) : 0
	}));
	const mix = [{
		name: "Physical",
		value: intel.data?.totals?.physical ?? 0,
		fill: "var(--color-muted)"
	}, {
		name: "Digital",
		value: intel.data?.totals?.digital ?? 0,
		fill: "var(--color-accent)"
	}];
	const hqOps = (data?.operators ?? []).filter((o) => o.kind === "ssp");
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-64" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-3 h-4 w-96" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid grid-cols-2 gap-3 lg:grid-cols-5",
			children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 rounded-xl" }, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-8 h-64 rounded-xl" })
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "eSAULOG Solution System Portal",
			title: "TukodPH Super Admin HQ",
			description: "Assigned TukodPH operators control every festival tenant: create as digital co-partner, manage events, read the ledger, and operate the network.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => setOpen(true),
				children: "Create as co-partner"
			})
		}),
		data?.me ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface px-5 py-4 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Signed in Super Admin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 font-medium",
					children: [
						data.me.display_name,
						" · ",
						hqTitle(data.me.username)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-accent",
					children: data.me.username
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: hqDesk(data.me.username)
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-sm text-sm text-muted",
				children: [
					"Full SSP access. Last seen ",
					stampLabel(data.me.last_seen_at),
					". Passkeys are never displayed. Tenants cannot enter this portal."
				]
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Live tenants",
					value: s?.festivals ?? "—",
					hint: "Published seasons"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Draft / setup",
					value: s?.upcoming ?? "—",
					hint: "Not yet live"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Co-partner",
					value: s?.copartner_tenants ?? "—",
					hint: "TukodPH 30%"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Turnout",
					value: s ? compact(s.participants) : "—",
					hint: "Registered"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Co-partner 30%",
					value: data ? php(data.commission) : "—",
					hint: "Digital sponsor income"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid grid-cols-2 gap-3 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Network events",
					value: s ? compact(s.events) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Check-ins",
					value: s ? compact(s.checkins) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Physical income",
					value: s ? php(s.physical) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Digital income",
					value: s ? php(s.digital) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Pending intake",
					value: s?.pending_apps ?? "—"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-3 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Turnout by tenant"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/ssp/analytics",
						className: "text-xs text-muted hover:text-fg",
						children: "Full intelligence"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: 220,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: chart,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "color-mix(in oklab, var(--color-fg) 8%, transparent)",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "name",
								tick: {
									fill: "var(--color-muted)",
									fontSize: 11
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: {
								fill: "var(--color-muted)",
								fontSize: 11
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: TOOLTIP }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "turnout",
								fill: "var(--color-muted)",
								radius: [
									4,
									4,
									0,
									0
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "checkins",
								fill: "var(--color-accent)",
								radius: [
									4,
									4,
									0,
									0
								]
							})
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs tracking-wide text-muted uppercase",
						children: "Income mix"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: 160,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
							data: mix,
							dataKey: "value",
							nameKey: "name",
							innerRadius: 44,
							outerRadius: 68,
							paddingAngle: 3,
							children: mix.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: d.fill }, d.name))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
							contentStyle: TOOLTIP,
							formatter: (v) => php(v)
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-2 space-y-1 text-sm",
						children: [mix.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: d.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: php(d.value)
							})]
						}, d.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between border-t border-border pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "HQ 30%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: php(intel.data?.commission ?? 0)
							})]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl tracking-tight",
			children: "Super Admin scope"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "Everything in the Solution System Portal is available to the three assigned TukodPH operators."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: HQ_SCOPE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.body
				})]
			}, item.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HqAction, {
					to: "/ssp/festivals",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4" }),
					title: "Create co-partner festival",
					body: "Provision a tenant. TukodPH operates the digital festival at 30% of digital sponsor income."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HqAction, {
					to: "/ssp/events",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4" }),
					title: "Manage network events",
					body: "Create, publish, and open every event across tenants from Headquarters."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HqAction, {
					to: "/ssp/applications",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "size-4" }),
					title: "Review applications",
					body: `${s?.pending_apps ?? 0} pending intake. Approve self-serve licenses or co-partner agreements.`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HqAction, {
					to: "/ssp/analytics",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-4" }),
					title: "Intelligence",
					body: "Turnout, conversion, sponsor mix, income ledger, and co-partner commission."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HqAction, {
					to: "/ssp/users",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-4" }),
					title: "Super Admin access keys",
					body: "Three assigned TukodPH operators. User ID plus passkey. Rotate without revealing the current key."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ssp/network",
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-9 items-center justify-center rounded-md bg-surface-2 text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-medium",
							children: "Network operations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Participants, sponsors, vendors, and staff across every tenant."
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "Tenants"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/ssp/festivals",
						className: "text-sm text-muted hover:text-fg",
						children: "All tenants"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
					children: (data?.festivals ?? []).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/ssp/festivals/$festivalId",
							params: { festivalId: f.id },
							className: "min-w-0 hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: f.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									f.city,
									" · ",
									f.starts_on,
									" – ",
									f.ends_on,
									f.copartner ? " · Co-partner" : ""
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-muted",
									children: [f.participants, " pax"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: f.status }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin/$festivalId",
									params: { festivalId: f.id },
									className: "rounded-md px-2 py-1 text-xs text-muted hover:bg-surface-2 hover:text-fg",
									children: "Command"
								}),
								f.status !== "LIVE" && f.status !== "ENDED" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									disabled: goLive.isPending,
									onClick: () => goLive.mutate(f.id),
									children: "Go live"
								}) : null
							]
						})]
					}, f.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 font-display text-2xl tracking-tight",
						children: "Pending work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
						children: [pending.length === 0 && requested.length === 0 && drafts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-5 py-6 text-sm text-muted",
							children: "No pending HQ work."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							pending.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-5 py-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-wide text-muted uppercase",
										children: "Application"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-medium",
										children: a.festival_name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted",
										children: [
											a.organization_name,
											" · ",
											a.package_name
										]
									})
								]
							}, a.id)),
							requested.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-5 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-wide text-accent uppercase",
									children: "Co-partner request"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: a.festival_name
								})]
							}, a.id)),
							drafts.slice(0, 4).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-5 py-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-wide text-muted uppercase",
										children: "Not live"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-medium",
										children: f.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: f.status
									})
								]
							}, f.id))
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-5 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ssp/applications",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									children: "Open intake"
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 mb-3 font-display text-2xl tracking-tight",
						children: "Assigned Super Admins"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
						children: [hqOps.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 px-5 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: o.display_name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-accent",
									children: o.username
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-subtle",
									children: hqTitle(o.username)
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-xs tracking-wide text-muted uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-3" }), "HQ"]
							})]
						}, o.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-5 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ssp/users",
								className: "text-sm text-muted hover:text-fg",
								children: "Access keys"
							})
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl tracking-tight",
			children: "Network events"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: (data?.events ?? []).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/admin/$festivalId/events/$eventId",
				params: {
					festivalId: e.festival_id,
					eventId: e.id
				},
				className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4 hover:bg-surface-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: e.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						e.festival_name,
						" · ",
						shortDay(e.starts_at)
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "capitalize",
							children: e.event_type
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums",
							children: [
								e.checkin_count,
								"/",
								e.registered_count
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: e.status })
					]
				})]
			}, e.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateCopartnerDialog, {
			open,
			onOpenChange: setOpen
		})
	] });
}
function HqAction({ to, icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-9 items-center justify-center rounded-md bg-surface-2 text-accent",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-medium",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: body
			})
		]
	});
}
//#endregion
export { SspHome as component };
