import { o as __toESM } from "../_runtime.mjs";
import { L as string, N as number, P as object, R as union, j as literal } from "../_libs/@better-auth/core+[...].mjs";
import { t as auth } from "./server-D84ot6h3.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as createRootRoute, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { c as __exportAll } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DBpYOzCD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function AppProviders({ children }) {
	const [client] = (0, import_react.useState)(() => new QueryClient({ defaultOptions: { queries: {
		staleTime: 8e3,
		retry: 1,
		refetchOnWindowFocus: false
	} } }));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			theme: "dark",
			position: "top-center",
			toastOptions: { className: "bg-surface text-fg border-border shadow-[var(--shadow-border)]" }
		})]
	});
}
var styles_default = "/assets/styles-BQWN_qIB.css";
var APP_NAME = "eSAULOG";
var Route$40 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#160910"
			},
			{
				name: "description",
				content: "eSAULOG DFEMS — Digital Festival Operating System for Philippine festivals. Plan, authenticate, engage, and measure."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-screen bg-bg font-sans text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppProviders, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$38 = () => import("./routes-Dji6wzpm.mjs");
var Route$39 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$38, "component") });
var $$splitComponentImporter$37 = () => import("./apply-zudSqovR.mjs");
var Route$38 = createFileRoute("/apply")({ component: lazyRouteComponent($$splitComponentImporter$37, "component") });
var $$splitComponentImporter$36 = () => import("./gate-tCYqpdkn.mjs");
var Route$37 = createFileRoute("/gate")({
	validateSearch: (s) => ({
		festival: typeof s.festival === "string" ? s.festival : void 0,
		code: typeof s.code === "string" ? s.code : void 0
	}),
	component: lazyRouteComponent($$splitComponentImporter$36, "component")
});
var $$splitComponentImporter$35 = () => import("./hub-CBTENYaT.mjs");
var Route$36 = createFileRoute("/hub")({ component: lazyRouteComponent($$splitComponentImporter$35, "component") });
var $$splitComponentImporter$34 = () => import("./login-CRmaAql1.mjs");
var Route$35 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$34, "component") });
var $$splitComponentImporter$33 = () => import("./p-CAYetwKI.mjs");
var Route$34 = createFileRoute("/p")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var $$splitComponentImporter$32 = () => import("./packages-t3RWfDPN.mjs");
var Route$33 = createFileRoute("/packages")({ component: lazyRouteComponent($$splitComponentImporter$32, "component") });
var $$splitComponentImporter$31 = () => import("./pay-BXX4gLX2.mjs");
var Route$32 = createFileRoute("/pay")({
	validateSearch: (s) => ({ festivalId: typeof s.festivalId === "string" ? s.festivalId : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./product-DhO9MwY4.mjs");
var Route$31 = createFileRoute("/product")({ component: lazyRouteComponent($$splitComponentImporter$30, "component") });
var $$splitComponentImporter$29 = () => import("./samples-DwW8dS8L.mjs");
var Route$30 = createFileRoute("/samples")({ component: lazyRouteComponent($$splitComponentImporter$29, "component") });
var $$splitComponentImporter$28 = () => import("./sponsor-D9Bj2qLd.mjs");
var Route$29 = createFileRoute("/sponsor")({ component: lazyRouteComponent($$splitComponentImporter$28, "component") });
var $$splitComponentImporter$27 = () => import("./route-BoDJ4LAe.mjs");
var Route$28 = createFileRoute("/ssp")({ component: lazyRouteComponent($$splitComponentImporter$27, "component") });
var $$splitComponentImporter$26 = () => import("./vendor-BsBI4-Xp.mjs");
var Route$27 = createFileRoute("/vendor")({ component: lazyRouteComponent($$splitComponentImporter$26, "component") });
var $$splitComponentImporter$25 = () => import("./route-KPgsWSbe.mjs");
var Route$26 = createFileRoute("/admin/$festivalId")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./f._slug-D93oPK-B.mjs");
var Route$25 = createFileRoute("/f/$slug")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
var $$splitComponentImporter$23 = () => import("./festivals-Dwibaru3.mjs");
var Route$24 = createFileRoute("/festivals/")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("../_slug-CbVg_kTw.mjs");
var Route$23 = createFileRoute("/festivals/$slug")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./ssp-bGHli7pL.mjs");
var Route$22 = createFileRoute("/ssp/")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./analytics-Di7klvUb.mjs");
var Route$21 = createFileRoute("/ssp/analytics")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./applications-mIMMlQ1Y.mjs");
var Route$20 = createFileRoute("/ssp/applications")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./festivals-BpcSoBCE.mjs");
var Route$19 = createFileRoute("/ssp/festivals")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./login-DOo9NO40.mjs");
var Route$18 = createFileRoute("/ssp/login")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./organizations-B1ZbqaBz.mjs");
var Route$17 = createFileRoute("/ssp/organizations")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./users-BIQ2ONjE.mjs");
var Route$16 = createFileRoute("/ssp/users")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("../_festivalId-C8VdUAz8.mjs");
var Route$15 = createFileRoute("/admin/$festivalId/")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./ai-BJw6nUDO.mjs");
var Route$14 = createFileRoute("/admin/$festivalId/ai")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./analytics-DChie83Z.mjs");
var Route$13 = createFileRoute("/admin/$festivalId/analytics")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./cms-3ug3BtZP.mjs");
var Route$12 = createFileRoute("/admin/$festivalId/cms")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./events-DGg31dXx.mjs");
var Route$11 = createFileRoute("/admin/$festivalId/events")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./gates-k6wWv6zP.mjs");
var Route$10 = createFileRoute("/admin/$festivalId/gates")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./income-C5EhtlsO.mjs");
var Route$9 = createFileRoute("/admin/$festivalId/income")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./participants-DbpwQkUh.mjs");
var Route$8 = createFileRoute("/admin/$festivalId/participants")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./planning-BBjtvr8g.mjs");
var Route$7 = createFileRoute("/admin/$festivalId/planning")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./publish-LS-LJvnJ.mjs");
var Route$6 = createFileRoute("/admin/$festivalId/publish")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./staff-8uyTnna9.mjs");
var Route$5 = createFileRoute("/admin/$festivalId/staff")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./venues-XFoo1itt.mjs");
var Route$4 = createFileRoute("/admin/$festivalId/venues")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var Route$3 = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
var $$splitComponentImporter$2 = () => import("./festivals._festivalId-DRoTHvEk.mjs");
var Route$2 = createFileRoute("/ssp/festivals/$festivalId")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./events._eventId-bbCvQZ6I.mjs");
var Route$1 = createFileRoute("/admin/$festivalId/events/$eventId")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./events.new-DWAYCipC.mjs");
var Route = createFileRoute("/admin/$festivalId/events/new")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$39.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$40
});
var ApplyRoute = Route$38.update({
	id: "/apply",
	path: "/apply",
	getParentRoute: () => Route$40
});
var GateRoute = Route$37.update({
	id: "/gate",
	path: "/gate",
	getParentRoute: () => Route$40
});
var HubRoute = Route$36.update({
	id: "/hub",
	path: "/hub",
	getParentRoute: () => Route$40
});
var LoginRoute = Route$35.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$40
});
var PRoute = Route$34.update({
	id: "/p",
	path: "/p",
	getParentRoute: () => Route$40
});
var PackagesRoute = Route$33.update({
	id: "/packages",
	path: "/packages",
	getParentRoute: () => Route$40
});
var PayRoute = Route$32.update({
	id: "/pay",
	path: "/pay",
	getParentRoute: () => Route$40
});
var ProductRoute = Route$31.update({
	id: "/product",
	path: "/product",
	getParentRoute: () => Route$40
});
var SamplesRoute = Route$30.update({
	id: "/samples",
	path: "/samples",
	getParentRoute: () => Route$40
});
var SponsorRoute = Route$29.update({
	id: "/sponsor",
	path: "/sponsor",
	getParentRoute: () => Route$40
});
var SspRouteRoute = Route$28.update({
	id: "/ssp",
	path: "/ssp",
	getParentRoute: () => Route$40
});
var VendorRoute = Route$27.update({
	id: "/vendor",
	path: "/vendor",
	getParentRoute: () => Route$40
});
var AdminFestivalIdRouteRoute = Route$26.update({
	id: "/admin/$festivalId",
	path: "/admin/$festivalId",
	getParentRoute: () => Route$40
});
var FSlugRoute = Route$25.update({
	id: "/f/$slug",
	path: "/f/$slug",
	getParentRoute: () => Route$40
});
var FestivalsIndexRoute = Route$24.update({
	id: "/festivals/",
	path: "/festivals/",
	getParentRoute: () => Route$40
});
var FestivalsSlugRoute = Route$23.update({
	id: "/festivals/$slug",
	path: "/festivals/$slug",
	getParentRoute: () => Route$40
});
var SspIndexRoute = Route$22.update({
	id: "/",
	path: "/",
	getParentRoute: () => SspRouteRoute
});
var SspAnalyticsRoute = Route$21.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => SspRouteRoute
});
var SspApplicationsRoute = Route$20.update({
	id: "/applications",
	path: "/applications",
	getParentRoute: () => SspRouteRoute
});
var SspFestivalsRoute = Route$19.update({
	id: "/festivals",
	path: "/festivals",
	getParentRoute: () => SspRouteRoute
});
var SspLoginRoute = Route$18.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => SspRouteRoute
});
var SspOrganizationsRoute = Route$17.update({
	id: "/organizations",
	path: "/organizations",
	getParentRoute: () => SspRouteRoute
});
var SspUsersRoute = Route$16.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => SspRouteRoute
});
var AdminFestivalIdIndexRoute = Route$15.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminFestivalIdRouteRoute
});
var AdminFestivalIdAiRoute = Route$14.update({
	id: "/ai",
	path: "/ai",
	getParentRoute: () => AdminFestivalIdRouteRoute
});
var AdminFestivalIdAnalyticsRoute = Route$13.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => AdminFestivalIdRouteRoute
});
var AdminFestivalIdCmsRoute = Route$12.update({
	id: "/cms",
	path: "/cms",
	getParentRoute: () => AdminFestivalIdRouteRoute
});
var AdminFestivalIdEventsRoute = Route$11.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => AdminFestivalIdRouteRoute
});
var AdminFestivalIdGatesRoute = Route$10.update({
	id: "/gates",
	path: "/gates",
	getParentRoute: () => AdminFestivalIdRouteRoute
});
var AdminFestivalIdIncomeRoute = Route$9.update({
	id: "/income",
	path: "/income",
	getParentRoute: () => AdminFestivalIdRouteRoute
});
var AdminFestivalIdParticipantsRoute = Route$8.update({
	id: "/participants",
	path: "/participants",
	getParentRoute: () => AdminFestivalIdRouteRoute
});
var AdminFestivalIdPlanningRoute = Route$7.update({
	id: "/planning",
	path: "/planning",
	getParentRoute: () => AdminFestivalIdRouteRoute
});
var AdminFestivalIdPublishRoute = Route$6.update({
	id: "/publish",
	path: "/publish",
	getParentRoute: () => AdminFestivalIdRouteRoute
});
var AdminFestivalIdStaffRoute = Route$5.update({
	id: "/staff",
	path: "/staff",
	getParentRoute: () => AdminFestivalIdRouteRoute
});
var AdminFestivalIdVenuesRoute = Route$4.update({
	id: "/venues",
	path: "/venues",
	getParentRoute: () => AdminFestivalIdRouteRoute
});
var ApiAuthSplatRoute = Route$3.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$40
});
var SspFestivalsFestivalIdRoute = Route$2.update({
	id: "/$festivalId",
	path: "/$festivalId",
	getParentRoute: () => SspFestivalsRoute
});
var AdminFestivalIdEventsEventIdRoute = Route$1.update({
	id: "/$eventId",
	path: "/$eventId",
	getParentRoute: () => AdminFestivalIdEventsRoute
});
var AdminFestivalIdEventsNewRoute = Route.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AdminFestivalIdEventsRoute
});
var SspFestivalsRouteChildren = { SspFestivalsFestivalIdRoute };
var SspRouteRouteChildren = {
	SspAnalyticsRoute,
	SspApplicationsRoute,
	SspFestivalsRoute: SspFestivalsRoute._addFileChildren(SspFestivalsRouteChildren),
	SspLoginRoute,
	SspOrganizationsRoute,
	SspUsersRoute,
	SspIndexRoute
};
var SspRouteRouteWithChildren = SspRouteRoute._addFileChildren(SspRouteRouteChildren);
var AdminFestivalIdEventsRouteChildren = {
	AdminFestivalIdEventsEventIdRoute,
	AdminFestivalIdEventsNewRoute
};
var AdminFestivalIdRouteRouteChildren = {
	AdminFestivalIdAiRoute,
	AdminFestivalIdAnalyticsRoute,
	AdminFestivalIdCmsRoute,
	AdminFestivalIdEventsRoute: AdminFestivalIdEventsRoute._addFileChildren(AdminFestivalIdEventsRouteChildren),
	AdminFestivalIdGatesRoute,
	AdminFestivalIdIncomeRoute,
	AdminFestivalIdParticipantsRoute,
	AdminFestivalIdPlanningRoute,
	AdminFestivalIdPublishRoute,
	AdminFestivalIdStaffRoute,
	AdminFestivalIdVenuesRoute,
	AdminFestivalIdIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	SspRouteRoute: SspRouteRouteWithChildren,
	ApplyRoute,
	GateRoute,
	HubRoute,
	LoginRoute,
	PRoute,
	PackagesRoute,
	PayRoute,
	ProductRoute,
	SamplesRoute,
	SponsorRoute,
	VendorRoute,
	AdminFestivalIdRouteRoute: AdminFestivalIdRouteRoute._addFileChildren(AdminFestivalIdRouteRouteChildren),
	FSlugRoute,
	FestivalsSlugRoute,
	FestivalsIndexRoute,
	ApiAuthSplatRoute
};
var routeTree = Route$40._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Route$23 as _, Route$4 as a, Route$32 as b, Route$7 as c, Route$10 as d, Route$11 as f, Route$15 as g, Route$14 as h, Route$2 as i, Route$8 as l, Route$13 as m, Route as n, Route$5 as o, Route$12 as p, Route$1 as r, Route$6 as s, router_exports as t, Route$9 as u, Route$25 as v, Route$37 as x, Route$26 as y };
