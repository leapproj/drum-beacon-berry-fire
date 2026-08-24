import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { i as setOperatorSession } from "./operator-session-B3mLSVbp.mjs";
import { r as signUpTenant } from "./operator-auth-D61No1_2.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as Label, t as Input } from "./input-3ABYB-zP.mjs";
import { n as SiteNav, t as SiteFooter } from "./site-nav-KvYuh7sV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/apply-zudSqovR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ApplyPage() {
	const nav = useNavigate();
	const [form, setForm] = (0, import_react.useState)({
		username: "",
		password: "",
		display_name: "",
		organization_name: "",
		contact_email: ""
	});
	const mut = useMutation({
		mutationFn: () => signUpTenant({ data: form }),
		onSuccess: (res) => {
			setOperatorSession(res.token, res.profile);
			nav({ to: "/hub" });
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.28em] text-muted uppercase",
						children: "Apply as tenant"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl tracking-tight",
						children: "Create your organizer account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Sign up to draft festivals, organize events, and publish when the season is ready. Payment happens at publish — not at signup."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8 grid gap-3",
						onSubmit: (e) => {
							e.preventDefault();
							mut.mutate();
						},
						children: [
							[
								["organization_name", "Organization / LGU"],
								["display_name", "Your name"],
								["contact_email", "Contact email"],
								["username", "User ID"],
								["password", "Passkey"]
							].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: key,
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: key,
									required: true,
									type: key === "password" ? "password" : key.includes("email") ? "email" : "text",
									autoComplete: key === "password" ? "new-password" : key === "username" ? "username" : "on",
									value: form[key],
									onChange: (e) => setForm({
										...form,
										[key]: e.target.value
									})
								})]
							}, key)),
							mut.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-danger",
								children: mut.error.message
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: mut.isPending,
								children: mut.isPending ? "Creating account…" : "Create tenant account"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-muted",
						children: [
							"Already have an account?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "text-fg underline-offset-4 hover:underline",
								children: "Sign in"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ApplyPage as component };
