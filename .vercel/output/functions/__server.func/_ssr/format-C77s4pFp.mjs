import { n as format, t as parseISO } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/format-C77s4pFp.js
function php(amount) {
	return new Intl.NumberFormat("en-PH", {
		style: "currency",
		currency: "PHP",
		maximumFractionDigits: 0
	}).format(amount);
}
function compact(n) {
	return new Intl.NumberFormat("en-PH").format(n);
}
function asDate(value) {
	if (value instanceof Date) return value;
	const iso = value.includes("T") ? value : `${value}T00:00:00`;
	return parseISO(iso);
}
function rangeLabel(start, end) {
	const s = asDate(start);
	const e = asDate(end);
	if (format(s, "yyyy-MM-dd") === format(e, "yyyy-MM-dd")) return `${format(s, "EEE d MMM")} · ${format(s, "h:mm a")} – ${format(e, "h:mm a")}`;
	return `${format(s, "d MMM h:mm a")} – ${format(e, "d MMM h:mm a")}`;
}
function isoText(value) {
	if (value instanceof Date) return value.toISOString();
	if (typeof value === "string") return value;
	return String(value ?? "");
}
//#endregion
export { rangeLabel as i, isoText as n, php as r, compact as t };
