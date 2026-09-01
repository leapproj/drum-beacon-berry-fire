import { o as __toESM } from "../_runtime.mjs";
import { o as stampLabel } from "./format-CP3TpnOc.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as KeyRound, i as Shield } from "../_libs/lucide-react.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as Skeleton } from "./operator-gate-D0cHrcyf.mjs";
import { n as PageHeader, t as Page } from "./shell-GkA-jbwc.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as Label, r as Select, t as Input } from "./input-DJUt6prj.mjs";
import { t as Badge } from "./badge-C9WJniDN.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-DF_dFfQw.mjs";
import { i as getSspOverview, l as rotateSspPasskey, s as issueTenantOperator } from "./ssp-BRJpZopk.mjs";
import { a as hqTitle, i as hqDesk, n as HQ_SCOPE } from "./hq-chrome-DmY1AtHp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/users-D8kjBDkY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OperatorsPage() {
	const { data, isLoading } = useQuery({
		queryKey: ["ssp"],
		queryFn: () => getSspOverview()
	});
	const hq = (data?.operators ?? []).filter((o) => o.kind === "ssp");
	const tenants = (data?.operators ?? []).filter((o) => o.kind === "tenant");
	const [target, setTarget] = (0, import_react.useState)(null);
	const [issueOpen, setIssueOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Super Admin portal",
			title: "Access keys",
			description: "Three assigned TukodPH operators hold Headquarters. The access key is User ID plus passkey. Passkeys are issued offline and never displayed here or on the login door.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: () => setIssueOpen(true),
				children: "Issue tenant key"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "How HQ signs in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Open the Super Admin door, enter your User ID and passkey. Tenant organizers cannot enter this portal. Rotate a passkey if an operator leaves or a key is compromised — the new value is typed in, never shown back."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "What the key unlocks"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Full SSP: create co-partner festivals, manage every tenant and event, read intelligence, operate the network, and open any command center."
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl tracking-tight",
			children: "Assigned Super Admins"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "Van, Lanz, and Marc · TukodPH Headquarters. User ID is the public identifier. Passkey stays offline."
		}),
		isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-48 rounded-xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-48 rounded-xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-48 rounded-xl" })
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3 md:grid-cols-3",
			children: hq.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: o.display_name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: hqTitle(o.username)
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							tone: "live",
							className: "inline-flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-3" }), "HQ"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-mono text-sm text-accent",
						children: o.username
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: hqDesk(o.username)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-subtle",
						children: o.contact_email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-subtle",
						children: ["Last seen ", stampLabel(o.last_seen_at)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => setTarget(o),
							children: "Rotate passkey"
						})
					})
				]
			}, o.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl tracking-tight",
			children: "Scope of a Super Admin key"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: HQ_SCOPE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-8 items-center justify-center rounded-md bg-surface-2 text-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-medium",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: item.body
					})
				]
			}, item.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl tracking-tight",
			children: "Tenant operators"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "Festival desks only. They cannot open Headquarters. HQ can issue a new tenant key and attach it to a festival."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: tenants.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-5 py-6 text-sm text-muted",
				children: "No tenant operators yet."
			}) : tenants.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: o.display_name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						o.organization_name,
						" · ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono",
							children: o.username
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Tenant"
				})]
			}, o.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/ssp/organizations",
				className: "text-sm text-muted hover:text-fg",
				children: "Organizations directory"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-2xl tracking-tight",
			children: "Audit log"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: (data?.auditLogs ?? []).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-5 py-6 text-sm text-muted",
				children: "No operator actions recorded yet."
			}) : (data?.auditLogs ?? []).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between gap-3 px-5 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					a.action,
					" · ",
					a.entity
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted tabular-nums",
					children: a.created_at
				})]
			}, a.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateDialog, {
			target,
			onClose: () => setTarget(null)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IssueTenantDialog, {
			open: issueOpen,
			onOpenChange: setIssueOpen,
			festivals: data?.festivals ?? []
		})
	] });
}
function RotateDialog({ target, onClose }) {
	const qc = useQueryClient();
	const [pass, setPass] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const mut = useMutation({
		mutationFn: () => rotateSspPasskey({ data: {
			operatorId: target.id,
			newPasskey: pass,
			confirm
		} }),
		onSuccess: (res) => {
			toast.success(`Passkey rotated for ${res.username}`);
			setPass("");
			setConfirm("");
			onClose();
			qc.invalidateQueries({ queryKey: ["ssp"] });
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: Boolean(target),
		onOpenChange: (v) => !v && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Rotate Super Admin passkey" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: target ? `Issue a new passkey for ${target.display_name} (${target.username}). The current key is never shown.` : "" }),
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
							htmlFor: "new-key",
							children: "New passkey"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "new-key",
							type: "password",
							autoComplete: "new-password",
							value: pass,
							onChange: (e) => setPass(e.target.value),
							required: true,
							minLength: 6
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "confirm-key",
							children: "Confirm passkey"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "confirm-key",
							type: "password",
							autoComplete: "new-password",
							value: confirm,
							onChange: (e) => setConfirm(e.target.value),
							required: true,
							minLength: 6
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: mut.isPending,
						children: mut.isPending ? "Saving…" : "Rotate passkey"
					})
				]
			})
		] })
	});
}
function IssueTenantDialog({ open, onOpenChange, festivals }) {
	const qc = useQueryClient();
	const [form, setForm] = (0, import_react.useState)({
		username: "",
		passkey: "",
		display_name: "",
		organization_name: "",
		contact_email: "",
		festivalId: ""
	});
	const mut = useMutation({
		mutationFn: () => issueTenantOperator({ data: form }),
		onSuccess: (res) => {
			toast.success(`Tenant key issued for ${res.username}`);
			setForm({
				username: "",
				passkey: "",
				display_name: "",
				organization_name: "",
				contact_email: "",
				festivalId: ""
			});
			onOpenChange(false);
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Issue tenant operator key" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Creates a festival-desk account. They cannot enter Headquarters. The passkey is typed once and never shown again." }),
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
								htmlFor: "iss-id",
								children: "User ID"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "iss-id",
								value: form.username,
								onChange: (e) => setForm((f) => ({
									...f,
									username: e.target.value
								})),
								required: true,
								minLength: 3
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "iss-key",
								children: "Passkey"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "iss-key",
								type: "password",
								autoComplete: "new-password",
								value: form.passkey,
								onChange: (e) => setForm((f) => ({
									...f,
									passkey: e.target.value
								})),
								required: true,
								minLength: 6
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "iss-name",
								children: "Display name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "iss-name",
								value: form.display_name,
								onChange: (e) => setForm((f) => ({
									...f,
									display_name: e.target.value
								})),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "iss-org",
								children: "Organization"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "iss-org",
								value: form.organization_name,
								onChange: (e) => setForm((f) => ({
									...f,
									organization_name: e.target.value
								}))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "iss-email",
								children: "Contact email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "iss-email",
								type: "email",
								value: form.contact_email,
								onChange: (e) => setForm((f) => ({
									...f,
									contact_email: e.target.value
								}))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "iss-fest",
								children: "Attach to tenant"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								id: "iss-fest",
								value: form.festivalId,
								onChange: (e) => setForm((f) => ({
									...f,
									festivalId: e.target.value
								})),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "None yet"
								}), festivals.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: f.id,
									children: f.name
								}, f.id))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: mut.isPending,
							children: mut.isPending ? "Issuing…" : "Issue key"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { OperatorsPage as component };
