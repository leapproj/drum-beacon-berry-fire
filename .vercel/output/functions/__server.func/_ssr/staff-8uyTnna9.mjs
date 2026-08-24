import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { o as Route$5 } from "./router-DBpYOzCD.mjs";
import { n as PageHeader, t as Page } from "./shell-BRN3PYI4.mjs";
import { c as getAdminEvents, f as getStaff, t as addStaff } from "./admin-DtCq0-PI.mjs";
import { t as StatusBadge } from "./status-badge-CQBhovZh.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as Label, t as Input } from "./input-3ABYB-zP.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-DF_dFfQw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/staff-8uyTnna9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StaffPage() {
	const { festivalId } = Route$5.useParams();
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["staff", festivalId],
		queryFn: () => getStaff({ data: festivalId })
	});
	const events = useQuery({
		queryKey: ["admin-events", festivalId],
		queryFn: () => getAdminEvents({ data: festivalId })
	});
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		full_name: "",
		role: "volunteer",
		phone: "",
		email: "",
		status: "active",
		assigned_event_id: "",
		notes: ""
	});
	const mut = useMutation({
		mutationFn: () => addStaff({ data: {
			festivalId,
			...form,
			assigned_event_id: form.assigned_event_id || null
		} }),
		onSuccess: () => {
			toast.success("Staff added");
			setOpen(false);
			qc.invalidateQueries({ queryKey: ["staff", festivalId] });
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "People operations",
			title: "Volunteers & staff",
			description: "Ushers, usherettes, volunteers, and coordinators assigned to events.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => setOpen(true),
				children: "Add staff"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[640px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Role"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Assignment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Status"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: (data ?? []).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border last:border-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: s.full_name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: s.phone || s.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 capitalize",
							children: s.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-muted",
							children: s.event_name ?? "Unassigned"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: s.status })
						})
					]
				}, s.id)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Add staff" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Volunteers and gate crew for this tenant only." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 grid gap-3",
					onSubmit: (e) => {
						e.preventDefault();
						mut.mutate();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Full name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								value: form.full_name,
								onChange: (e) => setForm({
									...form,
									full_name: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "h-11 rounded-md border border-border bg-surface-2 px-3 text-sm",
								value: form.role,
								onChange: (e) => setForm({
									...form,
									role: e.target.value
								}),
								children: [
									"volunteer",
									"usher",
									"usherette",
									"coordinator",
									"supervisor",
									"medic"
								].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: r,
									children: r
								}, r))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Assigned event" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "h-11 rounded-md border border-border bg-surface-2 px-3 text-sm",
								value: form.assigned_event_id,
								onChange: (e) => setForm({
									...form,
									assigned_event_id: e.target.value
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Unassigned"
								}), (events.data?.events ?? []).map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: ev.id,
									children: ev.name
								}, ev.id))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.phone,
								onChange: (e) => setForm({
									...form,
									phone: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: mut.isPending,
							children: "Save"
						})
					]
				})
			] })
		})
	] });
}
//#endregion
export { StaffPage as component };
