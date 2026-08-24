import { t as compact } from "./format-C77s4pFp.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { i as TopBar, n as PageHeader, r as Stat, t as Page } from "./shell-BRN3PYI4.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { t as AuthGate } from "./auth-gate-BiYxhl5h.mjs";
import { n as bumpCampaignScan, r as getSponsorDesk } from "./engage-DT5K-bX4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sponsor-D9Bj2qLd.js
var import_jsx_runtime = require_jsx_runtime();
function SponsorPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Desk, {}) });
}
function Desk() {
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["sponsor"],
		queryFn: () => getSponsorDesk()
	});
	const bump = useMutation({
		mutationFn: (id) => bumpCampaignScan({ data: id }),
		onSuccess: () => void qc.invalidateQueries({ queryKey: ["sponsor"] })
	});
	const scans = data?.campaigns.reduce((a, c) => a + c.scans, 0) ?? 0;
	const pax = data?.campaigns.reduce((a, c) => a + c.participants_count, 0) ?? 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { kicker: "Sponsor activation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Campaigns",
				title: "Sponsor environment",
				description: "Missions, digital ads, coupons, QR/NFC activations, and campaign performance — subject to the agreed privacy model."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Sponsors",
						value: data?.sponsors.length ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Campaigns",
						value: data?.campaigns.length ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Scans",
						value: compact(scans)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Engaged",
						value: compact(pax)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-3 md:grid-cols-2",
				children: (data?.campaigns ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: c.sponsor_name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-2xl",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: c.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 grid grid-cols-2 gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Scans"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular-nums",
								children: compact(c.scans)
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Participants"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular-nums",
								children: compact(c.participants_count)
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							size: "sm",
							variant: "outline",
							onClick: () => bump.mutate(c.id),
							children: "Simulate activation scan"
						})
					]
				}, c.id))
			})
		] })]
	});
}
//#endregion
export { SponsorPage as component };
