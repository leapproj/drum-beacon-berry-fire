import { o as __toESM } from "../_runtime.mjs";
import { i as rangeLabel } from "./format-CP3TpnOc.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as PageHeader, t as Page } from "./shell-GkA-jbwc.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as Label, r as Select, t as Input } from "./input-DJUt6prj.mjs";
import { t as StatusBadge } from "./status-badge-BpSBK1zA.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-DF_dFfQw.mjs";
import { a as hqCreateEvent, c as listNetworkEvents, d as setNetworkEventStatus } from "./ssp-BRJpZopk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-DURrCORX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NetworkEvents() {
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["ssp-events"],
		queryFn: () => listNetworkEvents()
	});
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [open, setOpen] = (0, import_react.useState)(false);
	const events = (0, import_react.useMemo)(() => {
		const rows = data?.events ?? [];
		if (filter === "copartner") return rows.filter((e) => e.copartner);
		if (filter === "live") return rows.filter((e) => e.festival_status === "LIVE");
		return rows;
	}, [data, filter]);
	const statusMut = useMutation({
		mutationFn: (input) => setNetworkEventStatus({ data: input }),
		onSuccess: () => {
			toast.success("Event status updated");
			qc.invalidateQueries({ queryKey: ["ssp-events"] });
			qc.invalidateQueries({ queryKey: ["ssp"] });
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Network program",
			title: "Events across tenants",
			description: "Headquarters creates, publishes, and opens every event. Jump into a command center when you need the full wizard.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => setOpen(true),
				children: "Create event"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 flex flex-wrap gap-2",
			children: [
				["all", "All"],
				["live", "Live tenants"],
				["copartner", "Co-partner"]
			].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: filter === key ? "default" : "outline",
				onClick: () => setFilter(key),
				children: label
			}, key))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[860px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Event"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Tenant"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "When"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Pax"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "HQ"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border last:border-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/$festivalId/events/$eventId",
								params: {
									festivalId: e.festival_id,
									eventId: e.id
								},
								className: "font-medium hover:underline",
								children: e.name
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ssp/festivals/$festivalId",
								params: { festivalId: e.festival_id },
								className: "text-muted hover:text-fg",
								children: e.festival_name
							}), e.copartner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-xs text-accent",
								children: "30%"
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-muted",
							children: rangeLabel(e.starts_at, e.ends_at)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 capitalize",
							children: e.event_type
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-4 py-3 tabular-nums",
							children: [
								e.checkin_count,
								"/",
								e.registered_count
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: e.status })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1",
								children: [
									"draft",
									"published",
									"live"
								].map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: e.status === st ? "default" : "outline",
									disabled: statusMut.isPending,
									onClick: () => statusMut.mutate({
										id: e.id,
										status: st
									}),
									children: st
								}, st))
							})
						})
					]
				}, e.id)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateEventDialog, {
			open,
			onOpenChange: setOpen,
			festivals: data?.festivals ?? []
		})
	] });
}
function CreateEventDialog({ open, onOpenChange, festivals }) {
	const qc = useQueryClient();
	const [form, setForm] = (0, import_react.useState)({
		festivalId: festivals[0]?.id ?? "",
		name: "",
		description: "",
		event_type: "physical",
		starts_at: "2026-11-01T16:00",
		ends_at: "2026-11-01T19:00",
		capacity: "1000",
		published: true
	});
	const mut = useMutation({
		mutationFn: () => hqCreateEvent({ data: {
			...form,
			festivalId: form.festivalId || festivals[0]?.id,
			capacity: Number(form.capacity) || 1e3
		} }),
		onSuccess: () => {
			toast.success("Event created from Headquarters");
			onOpenChange(false);
			setForm((f) => ({
				...f,
				name: "",
				description: ""
			}));
			qc.invalidateQueries({ queryKey: ["ssp-events"] });
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Create event as HQ" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Super Admin can add program to any tenant. TukodPH is recorded as organizer when you create as co-partner." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 grid gap-3",
					onSubmit: (e) => {
						e.preventDefault();
						mut.mutate();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "hq-evt-fest",
								children: "Tenant"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								id: "hq-evt-fest",
								value: form.festivalId || festivals[0]?.id || "",
								onChange: (e) => setForm((f) => ({
									...f,
									festivalId: e.target.value
								})),
								required: true,
								children: festivals.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: f.id,
									children: [
										f.name,
										" · ",
										f.city
									]
								}, f.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "hq-evt-name",
								children: "Event name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "hq-evt-name",
								value: form.name,
								onChange: (e) => setForm((f) => ({
									...f,
									name: e.target.value
								})),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "hq-evt-type",
								children: "Type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								id: "hq-evt-type",
								value: form.event_type,
								onChange: (e) => setForm((f) => ({
									...f,
									event_type: e.target.value
								})),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "physical",
										children: "Physical"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "digital",
										children: "Digital"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "hybrid",
										children: "Hybrid"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "hq-evt-start",
									children: "Starts"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "hq-evt-start",
									type: "datetime-local",
									value: form.starts_at,
									onChange: (e) => setForm((f) => ({
										...f,
										starts_at: e.target.value
									}))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "hq-evt-end",
									children: "Ends"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "hq-evt-end",
									type: "datetime-local",
									value: form.ends_at,
									onChange: (e) => setForm((f) => ({
										...f,
										ends_at: e.target.value
									}))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "hq-evt-cap",
								children: "Capacity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "hq-evt-cap",
								type: "number",
								min: 1,
								value: form.capacity,
								onChange: (e) => setForm((f) => ({
									...f,
									capacity: e.target.value
								}))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-3 rounded-lg bg-surface-2 p-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "mt-1 size-4 accent-accent",
								checked: form.published,
								onChange: (e) => setForm((f) => ({
									...f,
									published: e.target.checked
								}))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "Publish immediately"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-muted",
								children: "Leave on to put the event on the tenant calendar. Off keeps it as a draft."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: mut.isPending || !form.festivalId,
							children: mut.isPending ? "Creating…" : "Create event"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { NetworkEvents as component };
