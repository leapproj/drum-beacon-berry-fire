import { o as __toESM } from "./_runtime.mjs";
import { r as php, t as compact } from "./_ssr/format-CP3TpnOc.mjs";
import { o as require_jsx_runtime, s as require_react } from "./_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { i as Route$2 } from "./_ssr/router-5l7utmBS.mjs";
import { i as Skeleton } from "./_ssr/operator-gate-D0cHrcyf.mjs";
import { n as PageHeader, r as Stat, t as Page } from "./_ssr/shell-GkA-jbwc.mjs";
import { t as Button } from "./_ssr/button-TdAqEUQT.mjs";
import { n as Label, t as Input } from "./_ssr/input-DJUt6prj.mjs";
import { t as StatusBadge } from "./_ssr/status-badge-BpSBK1zA.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogDescription, t as Dialog } from "./_ssr/dialog-DF_dFfQw.mjs";
import { f as updateFestivalIdentity, i as getSspOverview, o as hqGoLive, p as updateFestivalStatus, u as setFestivalCopartner } from "./_ssr/ssp-BRJpZopk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_festivalId-CahZYvhj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUSES = [
	"DRAFT",
	"PLANNING",
	"SETUP",
	"LIVE",
	"ENDED"
];
function TenantDetail() {
	const { festivalId } = Route$2.useParams();
	const qc = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: ["ssp"],
		queryFn: () => getSspOverview()
	});
	const f = data?.festivals?.find((x) => x.id === festivalId);
	const events = (data?.events ?? []).filter((e) => e.festival_id === festivalId);
	const [editOpen, setEditOpen] = (0, import_react.useState)(false);
	const statusMut = useMutation({
		mutationFn: (status) => updateFestivalStatus({ data: {
			id: festivalId,
			status
		} }),
		onSuccess: () => {
			toast.success("Status updated");
			qc.invalidateQueries({ queryKey: ["ssp"] });
		}
	});
	const cpMut = useMutation({
		mutationFn: (copartner) => setFestivalCopartner({ data: {
			id: festivalId,
			copartner
		} }),
		onSuccess: (res) => {
			toast.success(res.copartner ? "Co-partner activated" : "Co-partner removed");
			qc.invalidateQueries({ queryKey: ["ssp"] });
		}
	});
	const goLive = useMutation({
		mutationFn: () => hqGoLive({ data: { id: festivalId } }),
		onSuccess: () => {
			toast.success("Festival is live");
			qc.invalidateQueries({ queryKey: ["ssp"] });
		},
		onError: (e) => toast.error(e.message)
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-64" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4",
		children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 rounded-xl" }, i))
	})] });
	if (!f) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, { children: "Tenant not found." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "HQ tenant",
			title: f.name,
			description: `${f.city}, ${f.province} · ${f.starts_on} – ${f.ends_on} · ${f.timezone}`,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/$festivalId",
							params: { festivalId: f.id },
							children: "Open command center"
						})
					}),
					f.status !== "LIVE" && f.status !== "ENDED" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: goLive.isPending,
						onClick: () => goLive.mutate(),
						children: "Go live"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setEditOpen(true),
						children: "Edit identity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/$festivalId/events/new",
							params: { festivalId: f.id },
							children: "Create event"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/$festivalId/cms",
							params: { festivalId: f.id },
							children: "CMS"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Participants",
					value: compact(f.participants)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Events",
					value: f.events
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Check-ins",
					value: compact(f.checkins ?? 0)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Digital income",
					value: php(f.digital ?? 0),
					hint: f.copartner ? `HQ 30% · ${php(Math.round((f.digital ?? 0) * .3))}` : "Self-serve"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-3 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "License status"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: f.status === s ? "default" : "outline",
							onClick: () => statusMut.mutate(s),
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: f.status })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Co-partner model"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: f.copartner ? "TukodPH operates the digital festival. 30% of digital sponsor income. Physical sponsors remain with the organizer." : "Self-serve license. Activate co-partner to have HQ run the digital festival."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: f.copartner ? "secondary" : "default",
							disabled: cpMut.isPending,
							onClick: () => cpMut.mutate(!f.copartner),
							children: f.copartner ? "Remove co-partner" : "Activate as co-partner"
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-3 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "HQ surfaces"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-1 text-sm",
					children: [[
						{
							t: "Command center",
							to: "/admin/$festivalId",
							params: { festivalId: f.id }
						},
						{
							t: "Planning desk",
							to: "/admin/$festivalId/planning",
							params: { festivalId: f.id }
						},
						{
							t: "Event calendar",
							to: "/admin/$festivalId/events",
							params: { festivalId: f.id }
						},
						{
							t: "Staff & volunteers",
							to: "/admin/$festivalId/staff",
							params: { festivalId: f.id }
						},
						{
							t: "Gate keys",
							to: "/admin/$festivalId/gates",
							params: { festivalId: f.id }
						},
						{
							t: "CMS website",
							to: "/admin/$festivalId/cms",
							params: { festivalId: f.id }
						},
						{
							t: "Income ledger",
							to: "/admin/$festivalId/income",
							params: { festivalId: f.id }
						},
						{
							t: "Analytics",
							to: "/admin/$festivalId/analytics",
							params: { festivalId: f.id }
						},
						{
							t: "AI organizer",
							to: "/admin/$festivalId/ai",
							params: { festivalId: f.id }
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between border-b border-border py-1.5 last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: s.to,
							params: s.params,
							className: "hover:text-accent",
							children: s.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-ok",
							children: "Open"
						})]
					}, s.t)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between py-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/festivals/$slug",
							params: { slug: f.slug },
							className: "hover:text-accent",
							children: "Public preview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-ok",
							children: "Open"
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Identity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 grid gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Organizer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5",
							children: f.organizer_name
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5",
							children: f.contact_email
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Slug"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5 font-mono",
							children: f.slug
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Package"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5",
							children: f.package_name ?? "Unlicensed"
						})] }),
						f.tagline ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Tagline"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5",
							children: f.tagline
						})] }) : null
					]
				})]
			})]
		}),
		events.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl",
			children: "Events on this tenant"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/admin/$festivalId/events/$eventId",
				params: {
					festivalId: f.id,
					eventId: e.id
				},
				className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4 hover:bg-surface-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: e.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: e.status })]
			}, e.id))
		})] }) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditIdentityDialog, {
			festival: f,
			open: editOpen,
			onOpenChange: setEditOpen
		})
	] });
}
function EditIdentityDialog({ festival, open, onOpenChange }) {
	const qc = useQueryClient();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		slug: "",
		city: "",
		province: "",
		starts_on: "",
		ends_on: "",
		tagline: "",
		organizer_name: "",
		contact_email: ""
	});
	(0, import_react.useEffect)(() => {
		if (!open) return;
		setForm({
			name: festival.name ?? "",
			slug: festival.slug ?? "",
			city: festival.city ?? "",
			province: festival.province ?? "",
			starts_on: String(festival.starts_on ?? "").slice(0, 10),
			ends_on: String(festival.ends_on ?? "").slice(0, 10),
			tagline: festival.tagline ?? "",
			organizer_name: festival.organizer_name ?? "",
			contact_email: festival.contact_email ?? ""
		});
	}, [open, festival]);
	const mut = useMutation({
		mutationFn: () => updateFestivalIdentity({ data: {
			id: festival.id,
			...form
		} }),
		onSuccess: () => {
			toast.success("Festival identity updated");
			onOpenChange(false);
			qc.invalidateQueries({ queryKey: ["ssp"] });
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit festival identity" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Super Admin can change the public identity of any tenant from Headquarters." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 grid gap-3",
					onSubmit: (e) => {
						e.preventDefault();
						mut.mutate();
					},
					children: [
						[
							["name", "Festival name"],
							["slug", "Slug"],
							["city", "City"],
							["province", "Province"],
							["organizer_name", "Organizer"],
							["contact_email", "Contact email"],
							["tagline", "Tagline"]
						].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: `id-${key}`,
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: `id-${key}`,
								required: key !== "tagline",
								value: form[key],
								onChange: (e) => setForm((prev) => ({
									...prev,
									[key]: e.target.value
								}))
							})]
						}, key)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "id-starts",
									children: "Starts"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "id-starts",
									type: "date",
									value: form.starts_on,
									onChange: (e) => setForm((prev) => ({
										...prev,
										starts_on: e.target.value
									}))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "id-ends",
									children: "Ends"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "id-ends",
									type: "date",
									value: form.ends_on,
									onChange: (e) => setForm((prev) => ({
										...prev,
										ends_on: e.target.value
									}))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: mut.isPending,
							children: mut.isPending ? "Saving…" : "Save identity"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { TenantDetail as component };
