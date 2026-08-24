import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { c as Route$7 } from "./router-DBpYOzCD.mjs";
import { n as PageHeader, t as Page } from "./shell-BRN3PYI4.mjs";
import { t as Progress } from "./progress-t968lKA4.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { c as getPlanning, h as togglePlanning } from "./erp-D21E2W5T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planning-BBjtvr8g.js
var import_jsx_runtime = require_jsx_runtime();
function PlanningPage() {
	const { festivalId } = Route$7.useParams();
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["plan", festivalId],
		queryFn: () => getPlanning({ data: festivalId })
	});
	const mut = useMutation({
		mutationFn: (input) => togglePlanning({ data: {
			festivalId,
			...input
		} }),
		onSuccess: () => void qc.invalidateQueries({ queryKey: ["plan", festivalId] })
	});
	const items = data?.items ?? [];
	const done = items.filter((i) => i.done).length;
	const pct = items.length ? Math.round(done / items.length * 100) : 0;
	const links = {
		calendar: `/admin/${festivalId}/events`,
		cms: `/admin/${festivalId}/cms`,
		sponsors: `/sponsor`,
		gate_staff: `/admin/${festivalId}/gates`,
		participant_portal: `/p`
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Draft until complete",
			title: "Festival planning",
			description: "Save the draft until identity, calendar, sponsors, CMS website, participant portal, and gate staff are in place. Then publish."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: pct,
				className: "max-w-sm flex-1"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums text-sm text-muted",
				children: [pct, "%"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: items.map((i) => {
				const auto = (data?.derived)?.[String(i.key)];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: i.label
					}), auto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-ok",
						children: "Detected in the tenant"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Still open"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [links[i.key] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: links[i.key],
							className: "text-sm text-muted hover:text-fg",
							children: "Open"
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: i.done ? "secondary" : "outline",
							onClick: () => mut.mutate({
								key: i.key,
								done: !i.done
							}),
							children: i.done ? "Done" : "Mark done"
						})]
					})]
				}, i.id);
			})
		})
	] });
}
//#endregion
export { PlanningPage as component };
