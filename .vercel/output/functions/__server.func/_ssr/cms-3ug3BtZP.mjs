import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { p as Route$12 } from "./router-DBpYOzCD.mjs";
import { n as PageHeader, t as Page } from "./shell-BRN3PYI4.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { n as Label, r as Textarea, t as Input } from "./input-3ABYB-zP.mjs";
import { d as publishCmsPage, f as saveCmsBlock, i as getCmsWorkspace, n as createCmsPage, t as addCmsBlock } from "./erp-D21E2W5T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cms-3ug3BtZP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KINDS = [
	{
		id: "hero",
		label: "Hero"
	},
	{
		id: "pathways",
		label: "Pathways"
	},
	{
		id: "stats",
		label: "Stats"
	},
	{
		id: "text",
		label: "Text"
	},
	{
		id: "program",
		label: "Program"
	},
	{
		id: "partners",
		label: "Partners"
	},
	{
		id: "cta",
		label: "Call to action"
	}
];
function CmsPage() {
	const { festivalId } = Route$12.useParams();
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["cms-ws", festivalId],
		queryFn: () => getCmsWorkspace({ data: festivalId })
	});
	const [active, setActive] = (0, import_react.useState)(0);
	const pages = data?.pages ?? [];
	const page = pages[active];
	const blocks = (0, import_react.useMemo)(() => (data?.blocks ?? []).filter((b) => b.page_id === page?.id), [data?.blocks, page?.id]);
	const [title, setTitle] = (0, import_react.useState)(null);
	const [body, setBody] = (0, import_react.useState)(null);
	const [newTitle, setNewTitle] = (0, import_react.useState)("");
	const [kind, setKind] = (0, import_react.useState)("text");
	const [heading, setHeading] = (0, import_react.useState)("");
	const [blockBody, setBlockBody] = (0, import_react.useState)("");
	const addPage = useMutation({
		mutationFn: () => createCmsPage({ data: {
			festivalId,
			title: newTitle,
			slug: newTitle
		} }),
		onSuccess: () => {
			setNewTitle("");
			toast.success("Page created");
			qc.invalidateQueries({ queryKey: ["cms-ws", festivalId] });
		}
	});
	const publish = useMutation({
		mutationFn: (published) => publishCmsPage({ data: {
			festivalId,
			id: page.id,
			published,
			title: title ?? page.title,
			body: body ?? page.body
		} }),
		onSuccess: () => {
			toast.success("Page saved");
			qc.invalidateQueries({ queryKey: ["cms-ws", festivalId] });
		}
	});
	const addBlock = useMutation({
		mutationFn: () => addCmsBlock({ data: {
			festivalId,
			pageId: page.id,
			kind,
			heading,
			body: blockBody
		} }),
		onSuccess: () => {
			setHeading("");
			setBlockBody("");
			toast.success("Block added");
			qc.invalidateQueries({ queryKey: ["cms-ws", festivalId] });
		}
	});
	const saveBlock = useMutation({
		mutationFn: (input) => saveCmsBlock({ data: {
			festivalId,
			...input
		} }),
		onSuccess: () => void qc.invalidateQueries({ queryKey: ["cms-ws", festivalId] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "TukodPH CMS",
		title: "Festival website",
		description: "WordPress-like control desk: pages, blocks, draft or publish. Same idea as cms.tukodph.com — structure over spectacle.",
		actions: data?.festival ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/f/$slug",
			params: { slug: data.festival.slug },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				children: "Preview site"
			})
		}) : null
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[220px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-2 py-1 text-xs tracking-wide text-muted uppercase",
					children: "Pages"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 flex flex-col gap-1",
					children: pages.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setActive(i);
							setTitle(null);
							setBody(null);
						},
						className: `rounded-md px-3 py-2 text-left text-sm ${i === active ? "bg-surface-2" : "text-muted hover:bg-bg"}`,
						children: [p.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-[10px] uppercase text-subtle",
							children: p.published ? "live" : "draft"
						})]
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-3 grid gap-2",
					onSubmit: (e) => {
						e.preventDefault();
						if (newTitle) addPage.mutate();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "New page title",
						value: newTitle,
						onChange: (e) => setNewTitle(e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "sm",
						variant: "outline",
						children: "Add page"
					})]
				})
			]
		}), page ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: title ?? page.title,
									onChange: (e) => setTitle(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Excerpt" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: body ?? page.body,
									onChange: (e) => setBody(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									onClick: () => publish.mutate(true),
									children: "Publish"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => publish.mutate(false),
									children: "Save draft"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: blocks.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockEditor, {
						kind: b.kind,
						heading: b.heading,
						body: b.body,
						visible: b.visible,
						onSave: (next) => saveBlock.mutate({
							id: b.id,
							...next
						})
					}, b.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Add block"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "h-11 rounded-md border border-border bg-surface-2 px-3 text-sm",
								value: kind,
								onChange: (e) => setKind(e.target.value),
								children: KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: k.id,
									children: k.label
								}, k.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "Heading",
								value: heading,
								onChange: (e) => setHeading(e.target.value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								placeholder: "Body",
								value: blockBody,
								onChange: (e) => setBlockBody(e.target.value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								disabled: !heading,
								onClick: () => addBlock.mutate(),
								children: "Insert block"
							})
						]
					})]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Create a page to start the website."
		})]
	})] });
}
function BlockEditor({ kind, heading, body, visible, onSave }) {
	const [h, setH] = (0, import_react.useState)(heading);
	const [b, setB] = (0, import_react.useState)(body);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] tracking-wide text-muted uppercase",
				children: kind
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				className: "mt-2",
				value: h,
				onChange: (e) => setH(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				className: "mt-2",
				value: b,
				onChange: (e) => setB(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: () => onSave({
						heading: h,
						body: b,
						visible
					}),
					children: "Save block"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => onSave({
						heading: h,
						body: b,
						visible: !visible
					}),
					children: visible ? "Hide" : "Show"
				})]
			})
		]
	});
}
//#endregion
export { CmsPage as component };
