import { o as __toESM } from "../_runtime.mjs";
import { r as php } from "./format-C77s4pFp.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as TopBar, n as PageHeader, r as Stat, t as Page } from "./shell-BRN3PYI4.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { t as Input } from "./input-3ABYB-zP.mjs";
import { t as AuthGate } from "./auth-gate-BiYxhl5h.mjs";
import { a as setVendorBooster, i as getVendorDesk, t as addProduct } from "./engage-DT5K-bX4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vendor-BsBI4-Xp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VendorPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Desk, {}) });
}
function Desk() {
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["vendor"],
		queryFn: () => getVendorDesk()
	});
	const [vendorId, setVendorId] = (0, import_react.useState)("vnd_kakanin");
	const [name, setName] = (0, import_react.useState)("");
	const [price, setPrice] = (0, import_react.useState)(100);
	const add = useMutation({
		mutationFn: () => addProduct({ data: {
			vendorId,
			name,
			price_php: price
		} }),
		onSuccess: () => {
			toast.success("Product listed");
			setName("");
			qc.invalidateQueries({ queryKey: ["vendor"] });
		}
	});
	const boost = useMutation({
		mutationFn: (id) => setVendorBooster({ data: {
			vendorId: id,
			booster: "booster"
		} }),
		onSuccess: () => {
			toast.success("MSME Booster on");
			qc.invalidateQueries({ queryKey: ["vendor"] });
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { kicker: "Vendor commerce" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Not a POS",
				title: "Vendor desk",
				description: "Festival sales-management and digital-commerce visibility. Cash drawers, payroll, and kitchen boards stay outside eSAULOG."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Vendors",
						value: data?.vendors.length ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Products",
						value: data?.products.length ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Offers",
						value: data?.offers.length ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Coupons issued",
						value: data?.couponCount ?? "—"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "Listings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-3 sm:grid-cols-2",
				children: (data?.vendors ?? []).map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: v.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: v.booster
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: v.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-subtle",
							children: v.location
						}),
						v.booster === "free" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-3",
							size: "sm",
							variant: "outline",
							onClick: () => boost.mutate(v.id),
							children: "Upgrade to MSME Booster"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-ok",
							children: "Featured · coupons · analytics · Dayu visibility"
						})
					]
				}, v.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "Add product"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-3 grid gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:grid-cols-4",
				onSubmit: (e) => {
					e.preventDefault();
					add.mutate();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "h-11 rounded-md border border-border bg-surface-2 px-3 text-sm",
						value: vendorId,
						onChange: (e) => setVendorId(e.target.value),
						children: (data?.vendors ?? []).map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: v.id,
							children: v.name
						}, v.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "Product name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						value: price,
						onChange: (e) => setPrice(Number(e.target.value))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "List"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[520px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-xs text-muted uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3",
									children: "Product"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3",
									children: "Vendor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3",
									children: "Price"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: (data?.products ?? []).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted",
								children: p.vendor_name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 tabular-nums",
								children: php(p.price_php)
							})
						]
					}, p.id)) })]
				})
			})
		] })]
	});
}
//#endregion
export { VendorPage as component };
