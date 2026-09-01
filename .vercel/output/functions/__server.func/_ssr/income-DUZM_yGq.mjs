import { r as php } from "./format-CP3TpnOc.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as Route$10 } from "./router-5l7utmBS.mjs";
import { n as PageHeader, r as Stat, t as Page } from "./shell-GkA-jbwc.mjs";
import { a as getFestivalIncome } from "./erp-D21E2W5T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/income-DUZM_yGq.js
var import_jsx_runtime = require_jsx_runtime();
function IncomePage() {
	const { festivalId } = Route$10.useParams();
	const { data } = useQuery({
		queryKey: ["income", festivalId],
		queryFn: () => getFestivalIncome({ data: festivalId })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Ledger",
			title: "Sponsor income",
			description: data?.copartner ? "Co-partner: TukodPH takes 30% of digital sponsor income. Physical festival sponsors stay with the organizer." : "Physical and digital sponsor income for this tenant."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Physical sponsors",
					value: data ? php(data.physical) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Digital sponsors",
					value: data ? php(data.digital) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "TukodPH commission",
					value: data ? php(data.commission) : "—",
					hint: data?.copartner ? "30% of digital only" : "Not a co-partner tenant"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: (data?.rows ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: r.sponsor_name ?? "Unassigned"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						r.channel,
						" · ",
						r.recognized_on,
						" · ",
						r.note
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tabular-nums",
					children: php(r.amount_php)
				})]
			}, r.id))
		})
	] });
}
//#endregion
export { IncomePage as component };
