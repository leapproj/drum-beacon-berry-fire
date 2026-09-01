import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { h as Route$15 } from "./router-5l7utmBS.mjs";
import { n as PageHeader, t as Page } from "./shell-GkA-jbwc.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { i as createServerFn } from "./ssr2.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B2Izd0c7.mjs";
import { a as tenantMiddleware } from "./operator-auth-D61No1_2.mjs";
import { t as Progress } from "./progress-t968lKA4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-B7HO03cx.js
var import_jsx_runtime = require_jsx_runtime();
var getAiInbox = createServerFn({ method: "GET" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(createSsrRpc("55833ee17567912d4d6039b633db96eca401772e38a6f6b8ffe80f4d59d8f014"));
var setRecommendationStatus = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((input) => input).handler(createSsrRpc("53f2068aca038a474b80c04335c89991eebb77e549e57ca2730f7f00520375b3"));
var runAiReview = createServerFn({ method: "POST" }).middleware([tenantMiddleware]).validator((festivalId) => festivalId).handler(createSsrRpc("95ddc1dbf1a322f64fce7348bf9abf0afdd5a61a114c913c7fa906a7308ab11a"));
function AiPage() {
	const { festivalId } = Route$15.useParams();
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["ai", festivalId],
		queryFn: () => getAiInbox({ data: festivalId })
	});
	const run = useMutation({
		mutationFn: () => runAiReview({ data: festivalId }),
		onSuccess: (res) => {
			if (!res.ok) toast.error(res.error);
			else toast.success(`${res.inserted} recommendations written`);
			qc.invalidateQueries({ queryKey: ["ai", festivalId] });
		}
	});
	const set = useMutation({
		mutationFn: (input) => setRecommendationStatus({ data: {
			festivalId,
			...input
		} }),
		onSuccess: () => void qc.invalidateQueries({ queryKey: ["ai", festivalId] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "AI Festival Organizer",
		title: "Operational intelligence",
		description: "Not a chatbot. An operations agent that reads events, staff, venues, and KPIs — then proposes work.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			onClick: () => run.mutate(),
			disabled: run.isPending,
			children: run.isPending ? "Reviewing…" : "Run operational review"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 lg:grid-cols-[1.2fr_0.8fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: (data?.recs ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: [
								r.kind,
								" · ",
								r.severity
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-subtle",
							children: r.status
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-xl tracking-tight",
						children: r.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: r.body
					}),
					r.status === "open" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => set.mutate({
								id: r.id,
								status: "approved"
							}),
							children: "Approve"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => set.mutate({
								id: r.id,
								status: "dismissed"
							}),
							children: "Dismiss"
						})]
					}) : null
				]
			}, r.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-wide text-muted uppercase",
				children: "Event readiness"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-4",
				children: (data?.readiness ?? []).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums text-muted",
						children: [e.score, "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: e.score })] }, e.id))
			})]
		})]
	})] });
}
//#endregion
export { AiPage as component };
