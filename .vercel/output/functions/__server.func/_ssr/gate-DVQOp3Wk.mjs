import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { x as Route$40 } from "./router-5l7utmBS.mjs";
import { n as Wordmark } from "./brand-Dm4ORxGo.mjs";
import { t as Button } from "./button-TdAqEUQT.mjs";
import { t as Input } from "./input-DJUt6prj.mjs";
import { i as createServerFn } from "./ssr2.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B2Izd0c7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gate-DVQOp3Wk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var redeemAccessKey = createServerFn({ method: "POST" }).validator((code) => code.trim().toUpperCase()).handler(createSsrRpc("682226d8ec9ff59108fdeada546b3d5ed874fcbecd6c75a351dc0fefe98cc983"));
var scanEpass = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("99d5a4f9ffa37a286e6644ee342d4f135f3bae625f6b0e69ad181052254de12f"));
var listRecentCheckins = createServerFn({ method: "GET" }).validator((code) => code.trim().toUpperCase()).handler(createSsrRpc("a78bacb617b26d63f3e6b9fc8e4ec9b8d69e954b1e433d1cfd9db4866ed00234"));
function GatePage() {
	const search = Route$40.useSearch();
	const [session, setSession] = (0, import_react.useState)(null);
	const [code, setCode] = (0, import_react.useState)(search.code ?? "HIGALAAY-GATE-A");
	const enter = useMutation({
		mutationFn: () => redeemAccessKey({ data: code }),
		onSuccess: (res) => {
			if (res.ok) setSession(res.session);
			else setErr(res.reason);
		}
	});
	const [err, setErr] = (0, import_react.useState)(null);
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-8 font-display text-3xl tracking-tight",
					children: "Event access key"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Ushers enter with an event access key. Demo keys are listed on the festival page."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 grid gap-3",
					onSubmit: (e) => {
						e.preventDefault();
						setErr(null);
						enter.mutate();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: code,
						onChange: (e) => setCode(e.target.value),
						placeholder: "HIGALAAY-GATE-A",
						autoCapitalize: "characters",
						className: "h-14 font-mono tracking-wide"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						disabled: enter.isPending,
						children: "Enter"
					})]
				}),
				err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-danger",
					children: err
				}) : null
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scanner, {
		session,
		onLeave: () => setSession(null)
	});
}
function Scanner({ session, onLeave }) {
	const [cred, setCred] = (0, import_react.useState)("ESA-0001821");
	const [result, setResult] = (0, import_react.useState)(null);
	const videoRef = (0, import_react.useRef)(null);
	const [cam, setCam] = (0, import_react.useState)(false);
	const scan = useMutation({
		mutationFn: (credential) => scanEpass({ data: {
			code: session.code,
			credential
		} }),
		onSuccess: (res) => {
			if (res.ok) setResult({
				ok: true,
				name: res.participant.name,
				credentialId: res.participant.credentialId,
				eventName: res.participant.eventName
			});
			else setResult({
				ok: false,
				reason: res.reason,
				name: res.participant?.name
			});
			recent.refetch();
		}
	});
	const recent = useQuery({
		queryKey: ["gate-recent", session.code],
		queryFn: () => listRecentCheckins({ data: session.code })
	});
	(0, import_react.useEffect)(() => {
		if (!cam) return;
		let stream = null;
		let stop = false;
		const run = async () => {
			try {
				stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
				if (videoRef.current) videoRef.current.srcObject = stream;
				const Detector = window.BarcodeDetector;
				if (!Detector || !videoRef.current) return;
				const det = new Detector({ formats: ["qr_code"] });
				const loop = async () => {
					if (stop || !videoRef.current) return;
					try {
						const codes = await det.detect(videoRef.current);
						if (codes[0]?.rawValue) {
							scan.mutate(codes[0].rawValue);
							stop = true;
						}
					} catch {}
					if (!stop) requestAnimationFrame(() => void loop());
				};
				loop();
			} catch {
				setCam(false);
			}
		};
		run();
		return () => {
			stop = true;
			stream?.getTracks().forEach((t) => t.stop());
		};
	}, [cam, scan]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen max-w-md px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm text-muted",
					onClick: onLeave,
					children: "Leave gate"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-xs tracking-[0.2em] text-muted uppercase",
				children: "Assigned event"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl tracking-tight",
				children: session.eventName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					session.gateName ?? "Gate",
					" · ",
					session.festivalName
				]
			}),
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-8 rounded-xl p-6 ${result.ok ? "bg-ok/15" : "bg-danger/15"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] uppercase",
						children: result.ok ? "Valid" : "Invalid"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-3xl",
						children: result.ok ? result.name : result.name ?? "—"
					}),
					result.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-sm",
						children: result.credentialId
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: result.reason
					}),
					result.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: ["Registered · ", result.eventName]
					}) : null
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 grid gap-3",
				onSubmit: (e) => {
					e.preventDefault();
					scan.mutate(cred);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: cred,
						onChange: (e) => setCred(e.target.value),
						placeholder: "Scan ePASS or enter ID",
						className: "h-14 font-mono"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						disabled: scan.isPending,
						children: scan.isPending ? "Checking…" : "Scan ePASS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => setCam((c) => !c),
						children: cam ? "Stop camera" : "Use camera"
					})
				]
			}),
			cam ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				autoPlay: true,
				playsInline: true,
				className: "mt-4 w-full rounded-xl bg-surface"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 text-xs tracking-wide text-muted uppercase",
				children: "Recent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2 text-sm",
				children: (recent.data ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex justify-between rounded-md bg-surface px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.full_name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: r.result === "valid" ? "text-ok" : "text-danger",
						children: r.result
					})]
				}, r.id))
			})
		]
	});
}
//#endregion
export { GatePage as component };
