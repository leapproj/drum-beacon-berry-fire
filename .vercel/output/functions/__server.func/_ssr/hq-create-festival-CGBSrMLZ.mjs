import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as Label, t as Input } from "./input-DJUt6prj.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-DF_dFfQw.mjs";
import { t as createFestivalTenant } from "./ssp-BRJpZopk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hq-create-festival-CGBSrMLZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CreateCopartnerDialog({ open, onOpenChange }) {
	const nav = useNavigate();
	const qc = useQueryClient();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		slug: "",
		city: "",
		province: "",
		starts_on: "2026-11-01",
		ends_on: "2026-11-07",
		organizer_name: "TukodPH Product Ops",
		contact_email: "festivals@tukodph.com",
		tagline: "",
		copartner: true
	});
	const mut = useMutation({
		mutationFn: () => createFestivalTenant({ data: form }),
		onSuccess: async (res) => {
			toast.success(res.copartner ? "Co-partner tenant created" : "Festival tenant created");
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Create festival as co-partner" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "TukodPH Headquarters provisions the tenant and operates the digital festival. Physical sponsors stay with the organizer. Commission is 30% of digital sponsor income." }),
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
								htmlFor: `hq-${key}`,
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: `hq-${key}`,
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
									htmlFor: "hq-starts",
									children: "Starts"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "hq-starts",
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
									htmlFor: "hq-ends",
									children: "Ends"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "hq-ends",
									type: "date",
									value: form.ends_on,
									onChange: (e) => setForm((f) => ({
										...f,
										ends_on: e.target.value
									}))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-3 rounded-lg bg-surface-2 p-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "mt-1 size-4 accent-accent",
								checked: form.copartner,
								onChange: (e) => setForm((f) => ({
									...f,
									copartner: e.target.checked
								}))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "TukodPH digital co-partner"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-muted",
								children: "HQ operates the digital festival. 30% of digital sponsor income. Leave on for the co-partner value proposition."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: mut.isPending,
							children: mut.isPending ? "Provisioning…" : "Generate tenant"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { CreateCopartnerDialog as t };
