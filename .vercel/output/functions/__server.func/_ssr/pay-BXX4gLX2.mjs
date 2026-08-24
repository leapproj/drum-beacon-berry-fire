import { o as __toESM } from "../_runtime.mjs";
import { r as php } from "./format-C77s4pFp.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { b as Route$32 } from "./router-DBpYOzCD.mjs";
import { n as OperatorGate } from "./operator-gate-X6EzhcLg.mjs";
import { i as TopBar, n as PageHeader, t as Page } from "./shell-BRN3PYI4.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { l as listPackages, u as payAndPublish } from "./erp-D21E2W5T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pay-BXX4gLX2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PayPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayInner, {}) });
}
function PayInner() {
	const { festivalId } = Route$32.useSearch();
	const nav = useNavigate();
	const pkgs = useQuery({
		queryKey: ["packages"],
		queryFn: () => listPackages()
	});
	const [packageId, setPackageId] = (0, import_react.useState)("");
	const selected = (pkgs.data ?? []).find((p) => p.id === (packageId || pkgs.data?.[1]?.id));
	const pay = useMutation({
		mutationFn: () => payAndPublish({ data: {
			festivalId: festivalId ?? "",
			packageId: selected?.id ?? ""
		} }),
		onSuccess: (res) => {
			toast.success("Payment recorded. Festival is in SETUP.");
			if (res.slug) nav({
				to: "/festivals/$slug",
				params: { slug: res.slug }
			});
			else nav({ to: "/hub" });
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			kicker: "Payment",
			items: [{
				to: "/hub",
				label: "Desk"
			}]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
			className: "max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Checkout",
				title: "Select a package",
				description: "Publishing a tenant requires a season license — or a digital co-partner agreement at 30% of digital sponsor income."
			}), !festivalId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"No festival selected.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/hub",
						className: "underline-offset-4 hover:underline",
						children: "Return to desk"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: (pkgs.data ?? []).map((p) => {
						const active = (selected?.id ?? "") === p.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setPackageId(p.id),
							className: `rounded-xl bg-surface p-5 text-left shadow-[var(--shadow-border)] ${active ? "shadow-[var(--shadow-border-hover)] ring-1 ring-accent" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-wide text-muted uppercase",
									children: p.kind === "copartner" ? "Co-partner" : "License"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-2xl",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-lg tabular-nums",
									children: p.price_php > 0 ? php(p.price_php) : "30% digital"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: p.description
								})
							]
						}, p.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: pay.isPending || !selected || !festivalId,
						onClick: () => pay.mutate(),
						children: pay.isPending ? "Processing…" : selected?.kind === "copartner" ? "Request co-partner & publish" : `Pay ${selected ? php(selected.price_php) : ""} (demo)`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/packages",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							children: "Compare packages"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-subtle",
					children: "Demo checkout — no real charge. GCash and card rails can be wired in a later layer."
				})
			] })]
		})]
	});
}
//#endregion
export { PayPage as component };
