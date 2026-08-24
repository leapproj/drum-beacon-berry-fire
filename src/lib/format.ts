import { format, parseISO } from "date-fns";

export function php(amount: number) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function compact(n: number) {
  return new Intl.NumberFormat("en-PH").format(n);
}

export function asDate(value: string | Date) {
  if (value instanceof Date) return value;
  const iso = value.includes("T") ? value : `${value}T00:00:00`;
  return parseISO(iso);
}

export function dayLabel(value: string | Date) {
  return format(asDate(value), "EEE, d MMM yyyy");
}

export function shortDay(value: string | Date) {
  return format(asDate(value), "d MMM");
}

export function timeLabel(value: string | Date) {
  return format(asDate(value), "h:mm a");
}

export function rangeLabel(start: string | Date, end: string | Date) {
  const s = asDate(start);
  const e = asDate(end);
  if (format(s, "yyyy-MM-dd") === format(e, "yyyy-MM-dd")) {
    return `${format(s, "EEE d MMM")} · ${format(s, "h:mm a")} – ${format(e, "h:mm a")}`;
  }
  return `${format(s, "d MMM h:mm a")} – ${format(e, "d MMM h:mm a")}`;
}

export function isoText(value: unknown): string {
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "string") return value;
  return String(value ?? "");
}
