import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { d as Route$10 } from "./router-DBpYOzCD.mjs";
import { n as PageHeader, t as Page } from "./shell-BRN3PYI4.mjs";
import { c as getAdminEvents, l as getGateCheckins, r as createGateKey, u as getGateKeys } from "./admin-DtCq0-PI.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as Label, t as Input } from "./input-3ABYB-zP.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-DF_dFfQw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gates-k6wWv6zP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GatesPage() {
	const { festivalId } = Route$10.useParams();
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["gates", festivalId],
		queryFn: () => getGateKeys({ data: festivalId })
	});
	const events = useQuery({
		queryKey: ["admin-events", festivalId],
		queryFn: () => getAdminEvents({ data: festivalId })
	});
	const checkins = useQuery({
		queryKey: ["gate-checkins", festivalId],
		queryFn: () => getGateCheckins({ data: festivalId })
	});
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		eventId: "",
		code: "",
		staff_role: "usher",
		max_devices: 8
	});
	const mut = useMutation({
		mutationFn: () => createGateKey({ data: {
			festivalId,
			...form
		} }),
		onSuccess: (res) => {
			toast.success(`Key ${res.code} issued`);
			setOpen(false);
			qc.invalidateQueries({ queryKey: ["gates", festivalId] });
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Physical authentication",
			title: "Gate management",
			description: "Staff only receive access to the events they are authorized to operate.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => setOpen(true),
				children: "Create access key"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: (data ?? []).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-sm",
					children: k.code
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						k.event_name,
						" · ",
						k.gate_name ?? "Gate",
						" · ",
						k.staff_role
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted",
					children: [k.max_devices, " devices"]
				})]
			}, k.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl",
			children: "Recent check-ins"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: (checkins.data ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 px-5 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: c.participant_name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted",
					children: [
						c.event_name,
						" · ",
						c.credential_id
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase text-muted",
					children: c.result
				})]
			}, c.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Create access key" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Event, role, and device cap. The code is what ushers type." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 grid gap-3",
					onSubmit: (e) => {
						e.preventDefault();
						mut.mutate();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Event" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								required: true,
								className: "h-11 rounded-md border border-border bg-surface-2 px-3 text-sm",
								value: form.eventId,
								onChange: (e) => setForm({
									...form,
									eventId: e.target.value
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select"
								}), (events.data?.events ?? []).map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: ev.id,
									children: ev.name
								}, ev.id))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Code" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								value: form.code,
								onChange: (e) => setForm({
									...form,
									code: e.target.value
								}),
								placeholder: "HIGALAAY-GATE-C"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Staff role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.staff_role,
								onChange: (e) => setForm({
									...form,
									staff_role: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Issue key"
						})
					]
				})
			] })
		})
	] });
}
//#endregion
export { GatesPage as component };
