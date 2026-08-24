import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as Route$2 } from "./router-DBpYOzCD.mjs";
import { n as PageHeader, t as Page } from "./shell-BRN3PYI4.mjs";
import { t as StatusBadge } from "./status-badge-CQBhovZh.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as getSspOverview, r as updateFestivalStatus } from "./ssp-Cscgt5eR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/festivals._festivalId-DRoTHvEk.js
var import_jsx_runtime = require_jsx_runtime();
var STATUSES = [
	"DRAFT",
	"PLANNING",
	"SETUP",
	"LIVE"
];
function TenantDetail() {
	const { festivalId } = Route$2.useParams();
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["ssp"],
		queryFn: () => getSspOverview()
	});
	const f = data?.festivals.find((x) => x.id === festivalId);
	const mut = useMutation({
		mutationFn: (status) => updateFestivalStatus({ data: {
			id: festivalId,
			status
		} }),
		onSuccess: () => {
			toast.success("Status updated");
			qc.invalidateQueries({ queryKey: ["ssp"] });
		}
	});
	if (!f) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, { children: "Loading tenant…" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Tenant",
			title: f.name,
			description: `${f.city}, ${f.province} · ${f.starts_on} – ${f.ends_on} · ${f.timezone}`,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/$festivalId",
						params: { festivalId: f.id },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Open command center" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/$festivalId/cms",
						params: { festivalId: f.id },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							children: "CMS"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/$festivalId/income",
						params: { festivalId: f.id },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							children: "Income"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 md:grid-cols-2",
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
							onClick: () => mut.mutate(s),
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Generated surfaces"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: [
						{
							t: "Public website",
							href: `/f/${f.slug}`
						},
						{
							t: "Planning desk",
							href: `/admin/${f.id}/planning`
						},
						{
							t: "Event calendar",
							href: `/admin/${f.id}/events`
						},
						{
							t: "Participant portal",
							href: "/p"
						},
						{
							t: "Gate staff",
							href: "/gate"
						},
						{
							t: "Vendor portal",
							href: "/vendor"
						},
						{
							t: "Sponsor environment",
							href: "/sponsor"
						},
						{
							t: "Analytics",
							href: `/admin/${f.id}/analytics`
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between border-b border-border py-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							className: "hover:text-fg",
							children: s.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ok",
							children: "Open"
						})]
					}, s.t))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "mt-6 grid gap-3 text-sm sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "Organizer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: f.organizer_name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: f.contact_email
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "Slug"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-mono",
						children: f.slug
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "Participants / events"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "mt-1 tabular-nums",
						children: [
							f.participants,
							" / ",
							f.events
						]
					})]
				})
			]
		})
	] });
}
//#endregion
export { TenantDetail as component };
