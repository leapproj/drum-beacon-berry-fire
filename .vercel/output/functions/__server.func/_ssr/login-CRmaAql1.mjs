import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as EsaulogMark } from "./brand-Dm4ORxGo.mjs";
import { i as setOperatorSession } from "./operator-session-B3mLSVbp.mjs";
import { n as signInTenant } from "./operator-auth-D61No1_2.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as Label, t as Input } from "./input-3ABYB-zP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CRmaAql1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEMOS = [
	{
		id: "higalaay",
		pass: "higalaay2026",
		name: "Higalaay 2026"
	},
	{
		id: "diyandi",
		pass: "diyandi2026",
		name: "Diyandi 2026"
	},
	{
		id: "lanzones",
		pass: "lanzones2026",
		name: "Lanzones 2026"
	}
];
function Login() {
	const nav = useNavigate();
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const mut = useMutation({
		mutationFn: () => signInTenant({ data: {
			username,
			password
		} }),
		onSuccess: (res) => {
			setOperatorSession(res.token, res.profile);
			nav({ to: "/hub" });
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "sunburst grid min-h-screen place-items-center px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "mb-8 flex items-center gap-2 text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EsaulogMark, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl text-fg",
						children: "eSAULOG"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl tracking-tight",
					children: "Tenant sign in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Enter your organizer ID and passkey to continue drafting, organizing, and publishing."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-8 grid gap-3",
					onSubmit: (e) => {
						e.preventDefault();
						mut.mutate();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "username",
								children: "User ID"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "username",
								autoComplete: "username",
								value: username,
								onChange: (e) => setUsername(e.target.value),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "password",
								children: "Passkey"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "password",
								type: "password",
								autoComplete: "current-password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								required: true
							})]
						}),
						mut.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-danger",
							children: mut.error.message
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: mut.isPending,
							children: mut.isPending ? "Signing in…" : "Enter command center"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-muted",
					children: [
						"New organizer?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/apply",
							className: "text-fg underline-offset-4 hover:underline",
							children: "Sign up as a tenant"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-xl bg-surface p-4 text-sm shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Demo tenant desks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: DEMOS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [d.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-0.5 block font-mono text-xs text-subtle",
								children: [
									d.id,
									" · ",
									d.pass
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								type: "button",
								onClick: () => {
									setUsername(d.id);
									setPassword(d.pass);
								},
								children: "Use"
							})]
						}, d.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs text-subtle",
					children: "Gate staff do not need an account — open a festival and enter with an access key."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-subtle",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/ssp/login",
						className: "underline-offset-4 hover:underline",
						children: "TukodPH operators"
					})
				})
			]
		})
	});
}
//#endregion
export { Login as component };
