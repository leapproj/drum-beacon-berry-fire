import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Page, PageHeader, Stat } from "@/components/shell";
import { StatusBadge } from "@/components/status-badge";
import { compact, php } from "@/lib/format";
import { getSspOverview } from "@/lib/server/ssp";

export const Route = createFileRoute("/ssp/")({ component: SspHome });

function SspHome() {
  const { data } = useQuery({ queryKey: ["ssp"], queryFn: () => getSspOverview() });
  const s = data?.stats;
  return (
    <Page>
      <PageHeader
        eyebrow="eSAULOG SSP"
        title="TukodPH command"
        description="Control every festival tenant. Create and publish as digital co-partner. Tenants cannot enter this portal."
      />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Live tenants" value={s?.festivals ?? "—"} />
        <Stat label="Draft / setup" value={s?.upcoming ?? "—"} />
        <Stat label="Turnout" value={s ? compact(s.participants) : "—"} hint="Registered participants" />
        <Stat label="Check-ins" value={s ? compact(s.checkins) : "—"} />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="Events" value={s ? compact(s.events) : "—"} />
        <Stat label="Physical income" value={s ? php(s.physical) : "—"} />
        <Stat label="Digital income" value={s ? php(s.digital) : "—"} />
        <Stat
          label="Co-partner 30%"
          value={data ? php(data.commission) : "—"}
          hint="Digital sponsor income only"
        />
      </div>
      <h2 className="mt-10 font-display text-2xl tracking-tight">Tenants</h2>
      <div className="mt-4 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
        {(data?.festivals ?? []).map((f) => (
          <Link
            key={f.id}
            to="/ssp/festivals/$festivalId"
            params={{ festivalId: f.id }}
            className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 hover:bg-surface-2"
          >
            <div>
              <p className="font-medium">{f.name}</p>
              <p className="text-sm text-muted">
                {f.city} · {f.starts_on} – {f.ends_on}
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span className="tabular-nums">{f.participants} pax</span>
              <span className="tabular-nums">{f.events} events</span>
              {f.copartner ? <span>Co-partner</span> : null}
              <StatusBadge status={f.status} />
            </div>
          </Link>
        ))}
      </div>
    </Page>
  );
}
