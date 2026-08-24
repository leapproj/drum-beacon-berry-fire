import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as OperatorGate, o as useOperatorProfile } from "./operator-gate-X6EzhcLg.mjs";
import { i as TopBar, n as PageHeader, r as Stat, t as Page } from "./shell-BRN3PYI4.mjs";
import { t as Progress } from "./progress-t968lKA4.mjs";
import { t as StatusBadge } from "./status-badge-CQBhovZh.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as Label, t as Input } from "./input-3ABYB-zP.mjs";
import { r as createDraftFestival, s as getOccHome } from "./erp-D21E2W5T.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-DF_dFfQw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hub-CBTENYaT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HubPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hub, {}) });
}
function Hub() {
	const profile = useOperatorProfile();
	const nav = useNavigate();
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["occ"],
		queryFn: () => getOccHome()
	});
	const ssp = Boolean(data?.ssp || profile?.kind === "ssp");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		city: "",
		province: "",
		starts_on: "2026-11-01",
		ends_on: "2026-11-08",
		tagline: ""
	});
	const create = useMutation({
		mutationFn: () => createDraftFestival({ data: {
			...form,
			organizer: profile?.display_name ?? "",
			email: ""
		} }),
		onSuccess: (res) => {
			toast.success("Draft festival created");
			setOpen(false);
			qc.invalidateQueries({ queryKey: ["occ"] });
			nav({
				to: "/admin/$festivalId",
				params: { festivalId: res.id }
			});
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				kicker: "Organizer Command Center",
				items: ssp ? [{
					to: "/hub",
					label: "Desk"
				}, {
					to: "/ssp",
					label: "SSP"
				}] : [{
					to: "/hub",
					label: "Desk"
				}]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
					eyebrow: "Desk",
					title: ssp ? "All tenants" : "Your command center",
					description: ssp ? "View every festival tenant. Open SSP to control the platform, or open a command center as co-partner." : "Create, draft, organize, and publish your festivals. You only see desks you own.",
					actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => setOpen(true),
						children: "New festival draft"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Tenants",
							value: data?.festivals.length ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Applications",
							value: data?.apps.length ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Drafts",
							value: data?.festivals.filter((f) => f.status === "DRAFT" || f.status === "PLANNING").length ?? "—"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 font-display text-2xl",
					children: "Festivals"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3",
					children: (data?.festivals ?? []).map((f) => {
						const pct = f.plan_total ? Math.round(f.plan_done / f.plan_total * 100) : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl",
										children: f.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted",
										children: [
											f.city,
											" · ",
											f.package_name ?? "Unlicensed draft",
											" ·",
											" ",
											f.copartner ? "Co-partner 30%" : "Self-serve"
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: f.status })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs tracking-wide text-muted uppercase",
									children: "Planning completeness"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: pct,
										className: "flex-1"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm tabular-nums text-muted",
										children: [pct, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/admin/$festivalId",
											params: { festivalId: f.id },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												children: "Command"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/admin/$festivalId/events",
											params: { festivalId: f.id },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												children: "Events"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/admin/$festivalId/staff",
											params: { festivalId: f.id },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												children: "Staff"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/admin/$festivalId/gates",
											params: { festivalId: f.id },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												children: "Gate"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/admin/$festivalId/publish",
											params: { festivalId: f.id },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												children: "Publish"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/festivals/$slug",
											params: { slug: f.slug },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												children: "Preview"
											})
										})
									]
								})
							]
						}, f.id);
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Create festival draft" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Saved as a draft until you organize the season and confirm publish at payment." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "grid gap-3",
						onSubmit: (e) => {
							e.preventDefault();
							create.mutate();
						},
						children: [[
							["name", "Festival name"],
							["city", "City"],
							["province", "Province"],
							["tagline", "Tagline"],
							["starts_on", "Starts"],
							["ends_on", "Ends"]
						].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: key !== "tagline",
								type: key.includes("on") ? "date" : "text",
								value: form[key],
								onChange: (e) => setForm({
									...form,
									[key]: e.target.value
								})
							})]
						}, key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: create.isPending,
							children: create.isPending ? "Creating…" : "Save draft"
						})]
					})
				] })
			})
		]
	});
}
//#endregion
export { HubPage as component };
