import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as PageHeader, t as Page } from "./shell-BRN3PYI4.mjs";
import { t as StatusBadge } from "./status-badge-CQBhovZh.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as Label, t as Input } from "./input-3ABYB-zP.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-DF_dFfQw.mjs";
import { n as getSspOverview, t as createFestivalTenant } from "./ssp-Cscgt5eR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/festivals-BpcSoBCE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FestivalsPage() {
	const { data } = useQuery({
		queryKey: ["ssp"],
		queryFn: () => getSspOverview()
	});
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Tenants",
			title: "Festival tenants",
			description: "Each create-festival action provisions public site, admin, participant, gate, vendor, sponsor, analytics, and AI organizer.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => setOpen(true),
				children: "Create festival"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: (data?.festivals ?? []).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/ssp/festivals/$festivalId",
				params: { festivalId: f.id },
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center rounded-md bg-surface-2 font-display",
							children: f.logo_text
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: f.status })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-2xl",
						children: f.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							f.city,
							", ",
							f.province
						]
					})
				]
			}, f.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateDialog, {
			open,
			onOpenChange: setOpen
		})
	] });
}
function CreateDialog({ open, onOpenChange }) {
	const nav = useNavigate();
	const qc = useQueryClient();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		slug: "",
		city: "",
		province: "",
		starts_on: "2026-11-01",
		ends_on: "2026-11-07",
		organizer_name: "",
		contact_email: "",
		tagline: ""
	});
	const mut = useMutation({
		mutationFn: () => createFestivalTenant({ data: form }),
		onSuccess: async (res) => {
			toast.success("Festival tenant created");
			await qc.invalidateQueries({ queryKey: ["ssp"] });
			onOpenChange(false);
			nav({
				to: "/ssp/festivals/$festivalId",
				params: { festivalId: res.id }
			});
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Create festival" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "SSP asks for identity, place, dates, and organizer. The system generates the tenant." }),
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
						["city", "City / municipality"],
						["province", "Province"],
						["organizer_name", "Official organizer"],
						["contact_email", "Contact email"],
						["tagline", "Tagline"]
					].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: key,
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: key,
							required: key !== "tagline",
							value: form[key],
							onChange: (e) => {
								const v = e.target.value;
								setForm((f) => ({
									...f,
									[key]: v,
									...key === "name" && !f.slug ? { slug: v.toLowerCase().replace(/[^a-z0-9]+/g, "-") } : {}
								}));
							}
						})]
					}, key)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "starts_on",
								children: "Starts"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "starts_on",
								type: "date",
								value: form.starts_on,
								onChange: (e) => setForm((f) => ({
									...f,
									starts_on: e.target.value
								}))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "ends_on",
								children: "Ends"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "ends_on",
								type: "date",
								value: form.ends_on,
								onChange: (e) => setForm((f) => ({
									...f,
									ends_on: e.target.value
								}))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: mut.isPending,
						children: mut.isPending ? "Creating…" : "Generate tenant"
					})
				]
			})
		] })
	});
}
//#endregion
export { FestivalsPage as component };
