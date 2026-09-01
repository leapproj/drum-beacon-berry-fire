import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route } from "./router-5l7utmBS.mjs";
import { n as PageHeader, t as Page } from "./shell-GkA-jbwc.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { i as Textarea, n as Label, t as Input } from "./input-DJUt6prj.mjs";
import { c as getAdminEvents, n as createEvent } from "./admin-DtCq0-PI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events.new-BP48Adjf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	"Basic information",
	"Schedule",
	"Venue",
	"Registration",
	"Access",
	"Engagement",
	"Sponsor",
	"Publish"
];
function EventWizard() {
	const { festivalId } = Route.useParams();
	const nav = useNavigate();
	const { data } = useQuery({
		queryKey: ["admin-events", festivalId],
		queryFn: () => getAdminEvents({ data: festivalId })
	});
	const [step, setStep] = (0, import_react.useState)(0);
	const [form, setForm] = (0, import_react.useState)({
		festivalId,
		name: "",
		description: "",
		organizer: "",
		category_id: null,
		event_type: "physical",
		starts_at: "2026-08-23T14:00",
		ends_at: "2026-08-23T17:00",
		venue_id: null,
		capacity: 500,
		registration_mode: "open",
		access_mode: "epass",
		engagement_notes: "",
		sponsor_id: null,
		emergency_contact: "",
		published: true
	});
	const mut = useMutation({
		mutationFn: () => createEvent({ data: {
			...form,
			starts_at: new Date(form.starts_at).toISOString(),
			ends_at: new Date(form.ends_at).toISOString()
		} }),
		onSuccess: (res) => {
			toast.success("Event published to the tenant");
			nav({
				to: "/admin/$festivalId/events/$eventId",
				params: {
					festivalId,
					eventId: res.id
				}
			});
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: `Step ${String(step + 1).padStart(2, "0")} of 08`,
				title: "Create event",
				description: STEPS[step]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mb-6 flex flex-wrap gap-1",
				children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { className: `h-1.5 flex-1 rounded-full ${i <= step ? "bg-accent" : "bg-fg/10"}` }, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: form.name,
									onChange: (e) => setForm({
										...form,
										name: e.target.value
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Description",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: form.description,
									onChange: (e) => setForm({
										...form,
										description: e.target.value
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Organizer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: form.organizer,
									onChange: (e) => setForm({
										...form,
										organizer: e.target.value
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Category",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "h-11 rounded-md border border-border bg-surface-2 px-3 text-sm",
									value: form.category_id ?? "",
									onChange: (e) => setForm({
										...form,
										category_id: e.target.value || null
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Uncategorized"
									}), (data?.categories ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c.id,
										children: c.name
									}, c.id))]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Event type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-2",
									children: [
										"physical",
										"digital",
										"hybrid"
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										size: "sm",
										variant: form.event_type === t ? "default" : "outline",
										onClick: () => setForm({
											...form,
											event_type: t
										}),
										children: t
									}, t))
								})
							})
						]
					}),
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Starts",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "datetime-local",
								value: form.starts_at,
								onChange: (e) => setForm({
									...form,
									starts_at: e.target.value
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Ends",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "datetime-local",
								value: form.ends_at,
								onChange: (e) => setForm({
									...form,
									ends_at: e.target.value
								})
							})
						})]
					}),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Venue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "h-11 rounded-md border border-border bg-surface-2 px-3 text-sm",
								value: form.venue_id ?? "",
								onChange: (e) => setForm({
									...form,
									venue_id: e.target.value || null
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Assign later"
								}), (data?.venues ?? []).map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: v.id,
									children: v.name
								}, v.id))]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Capacity",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: form.capacity,
								onChange: (e) => setForm({
									...form,
									capacity: Number(e.target.value)
								})
							})
						})]
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Registration mode",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								"open",
								"invite",
								"ticketed"
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								size: "sm",
								variant: form.registration_mode === m ? "default" : "outline",
								onClick: () => setForm({
									...form,
									registration_mode: m
								}),
								children: m
							}, m))
						})
					}),
					step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Access mode",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									"epass",
									"open",
									"staff"
								].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "sm",
									variant: form.access_mode === m ? "default" : "outline",
									onClick: () => setForm({
										...form,
										access_mode: m
									}),
									children: m
								}, m))
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Emergency contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.emergency_contact,
								onChange: (e) => setForm({
									...form,
									emergency_contact: e.target.value
								})
							})
						})]
					}),
					step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Engagement notes",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: form.engagement_notes,
							onChange: (e) => setForm({
								...form,
								engagement_notes: e.target.value
							}),
							placeholder: "Votes, missions, surveys attached to this event"
						})
					}),
					step === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Sponsor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "h-11 rounded-md border border-border bg-surface-2 px-3 text-sm",
							value: form.sponsor_id ?? "",
							onChange: (e) => setForm({
								...form,
								sponsor_id: e.target.value || null
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "None"
							}), (data?.sponsors ?? []).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s.id,
								children: s.name
							}, s.id))]
						})
					}),
					step === 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Name · "
							}), form.name || "Untitled"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Type · "
								}),
								form.event_type,
								" · ",
								form.access_mode,
								" · ",
								form.registration_mode
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: "Publishing writes the event into the tenant calendar and ePASS engine."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							disabled: step === 0,
							onClick: () => setStep((s) => s - 1),
							children: "Back"
						}), step < 7 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: () => setStep((s) => s + 1),
							disabled: step === 0 && !form.name,
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: () => mut.mutate(),
							disabled: mut.isPending,
							children: mut.isPending ? "Publishing…" : "Publish event"
						})]
					})
				]
			})
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
//#endregion
export { EventWizard as component };
