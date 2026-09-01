import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  BarChart3,
  Building2,
  CalendarDays,
  Inbox,
  KeyRound,
  Network,
  Shield,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { CreateCopartnerDialog } from "@/components/hq-create-festival";
import { HQ_SCOPE, hqDesk, hqTitle } from "@/components/hq-chrome";
import { Page, PageHeader, Stat } from "@/components/shell";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { compact, php, shortDay, stampLabel } from "@/lib/format";
import { getSspIntelligence, getSspOverview, hqGoLive } from "@/lib/server/ssp";
import { toast } from "sonner";

export const Route = createFileRoute("/ssp/")({ component: SspHome });

const TOOLTIP = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  color: "var(--color-fg)",
  borderRadius: 8,
  fontSize: 12,
};

function SspHome() {
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({ queryKey: ["ssp"], queryFn: () => getSspOverview() });
  const intel = useQuery({ queryKey: ["ssp-intel"], queryFn: () => getSspIntelligence() });
  const [open, setOpen] = useState(false);
  const s = data?.stats;
  const pending = (data?.apps ?? []).filter((a: { status: string }) => a.status === "pending");
  const requested = (data?.agreements ?? []).filter((a: { status: string }) => a.status === "requested");
  const drafts = (data?.festivals ?? []).filter((f: { status: string }) =>
    ["DRAFT", "PLANNING", "SETUP"].includes(f.status),
  );
  const goLive = useMutation({
    mutationFn: (id: string) => hqGoLive({ data: { id } }),
    onSuccess: () => {
      toast.success("Festival is live");
      void qc.invalidateQueries({ queryKey: ["ssp"] });
      void qc.invalidateQueries({ queryKey: ["ssp-intel"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const chart = (intel.data?.byFestival ?? []).map((f: any) => ({
    name: String(f.name).replace(/ 20\d\d/, ""),
    turnout: f.turnout,
    checkins: f.checkins,
    digital: f.digital,
    commission: f.copartner ? Math.round(f.digital * 0.3) : 0,
  }));
  const mix = [
    { name: "Physical", value: intel.data?.totals?.physical ?? 0, fill: "var(--color-muted)" },
    { name: "Digital", value: intel.data?.totals?.digital ?? 0, fill: "var(--color-accent)" },
  ];
  const hqOps = (data?.operators ?? []).filter((o: { kind: string }) => o.kind === "ssp");

  if (isLoading) {
    return (
      <Page>
        <Skeleton className="h-8 w-64" />
        <Skeleton className="mt-3 h-4 w-96" />
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-xl" />
          ))}
        </div>
        <Skeleton className="mt-8 h-64 rounded-xl" />
      </Page>
    );
  }

  return (
    <Page>
      <PageHeader
        eyebrow="eSAULOG Solution System Portal"
        title="TukodPH Super Admin HQ"
        description="Assigned TukodPH operators control every festival tenant: create as digital co-partner, manage events, read the ledger, and operate the network."
        actions={<Button onClick={() => setOpen(true)}>Create as co-partner</Button>}
      />

      {data?.me ? (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface px-5 py-4 shadow-[var(--shadow-border)]">
          <div>
            <p className="text-xs tracking-wide text-muted uppercase">Signed in Super Admin</p>
            <p className="mt-1 font-medium">
              {data.me.display_name} · {hqTitle(data.me.username)}
            </p>
            <p className="font-mono text-xs text-accent">{data.me.username}</p>
            <p className="mt-1 text-sm text-muted">{hqDesk(data.me.username)}</p>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Full SSP access. Last seen {stampLabel(data.me.last_seen_at)}. Passkeys are never
            displayed. Tenants cannot enter this portal.
          </p>
        </div>
      ) : null}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Stat label="Live tenants" value={s?.festivals ?? "—"} hint="Published seasons" />
        <Stat label="Draft / setup" value={s?.upcoming ?? "—"} hint="Not yet live" />
        <Stat label="Co-partner" value={s?.copartner_tenants ?? "—"} hint="TukodPH 30%" />
        <Stat label="Turnout" value={s ? compact(s.participants) : "—"} hint="Registered" />
        <Stat
          label="Co-partner 30%"
          value={data ? php(data.commission) : "—"}
          hint="Digital sponsor income"
        />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Stat label="Network events" value={s ? compact(s.events) : "—"} />
        <Stat label="Check-ins" value={s ? compact(s.checkins) : "—"} />
        <Stat label="Physical income" value={s ? php(s.physical) : "—"} />
        <Stat label="Digital income" value={s ? php(s.digital) : "—"} />
        <Stat label="Pending intake" value={s?.pending_apps ?? "—"} />
      </div>

      <div className="mt-8 grid gap-3 lg:grid-cols-3">
        <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] lg:col-span-2">
          <div className="mb-4 flex items-end justify-between">
            <p className="text-xs tracking-wide text-muted uppercase">Turnout by tenant</p>
            <Link to="/ssp/analytics" className="text-xs text-muted hover:text-fg">
              Full intelligence
            </Link>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={chart}>
              <CartesianGrid stroke="color-mix(in oklab, var(--color-fg) 8%, transparent)" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: "var(--color-muted)", fontSize: 11 }} />
              <YAxis tick={{ fill: "var(--color-muted)", fontSize: 11 }} />
              <Tooltip contentStyle={TOOLTIP} />
              <Bar dataKey="turnout" fill="var(--color-muted)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="checkins" fill="var(--color-accent)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <p className="mb-4 text-xs tracking-wide text-muted uppercase">Income mix</p>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={mix} dataKey="value" nameKey="name" innerRadius={44} outerRadius={68} paddingAngle={3}>
                {mix.map((d) => (
                  <Cell key={d.name} fill={d.fill} />
                ))}
              </Pie>
              <Tooltip contentStyle={TOOLTIP} formatter={(v: number) => php(v)} />
            </PieChart>
          </ResponsiveContainer>
          <ul className="mt-2 space-y-1 text-sm">
            {mix.map((d) => (
              <li key={d.name} className="flex justify-between">
                <span className="text-muted">{d.name}</span>
                <span className="tabular-nums">{php(d.value)}</span>
              </li>
            ))}
            <li className="flex justify-between border-t border-border pt-1">
              <span className="text-muted">HQ 30%</span>
              <span className="tabular-nums">{php(intel.data?.commission ?? 0)}</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="mt-10 font-display text-2xl tracking-tight">Super Admin scope</h2>
      <p className="mt-1 text-sm text-muted">
        Everything in the Solution System Portal is available to the three assigned TukodPH
        operators.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {HQ_SCOPE.map((item) => (
          <div key={item.title} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
            <p className="font-medium">{item.title}</p>
            <p className="mt-1 text-sm text-muted">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <HqAction
          to="/ssp/festivals"
          icon={<Building2 className="size-4" />}
          title="Create co-partner festival"
          body="Provision a tenant. TukodPH operates the digital festival at 30% of digital sponsor income."
        />
        <HqAction
          to="/ssp/events"
          icon={<CalendarDays className="size-4" />}
          title="Manage network events"
          body="Create, publish, and open every event across tenants from Headquarters."
        />
        <HqAction
          to="/ssp/applications"
          icon={<Inbox className="size-4" />}
          title="Review applications"
          body={`${s?.pending_apps ?? 0} pending intake. Approve self-serve licenses or co-partner agreements.`}
        />
        <HqAction
          to="/ssp/analytics"
          icon={<BarChart3 className="size-4" />}
          title="Intelligence"
          body="Turnout, conversion, sponsor mix, income ledger, and co-partner commission."
        />
        <HqAction
          to="/ssp/users"
          icon={<KeyRound className="size-4" />}
          title="Super Admin access keys"
          body="Three assigned TukodPH operators. User ID plus passkey. Rotate without revealing the current key."
        />
        <Link
          to="/ssp/network"
          className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
        >
          <div className="flex size-9 items-center justify-center rounded-md bg-surface-2 text-accent">
            <Network className="size-4" />
          </div>
          <p className="mt-4 font-medium">Network operations</p>
          <p className="mt-1 text-sm text-muted">
            Participants, sponsors, vendors, and staff across every tenant.
          </p>
        </Link>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <section className="lg:col-span-3">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="font-display text-2xl tracking-tight">Tenants</h2>
            <Link to="/ssp/festivals" className="text-sm text-muted hover:text-fg">
              All tenants
            </Link>
          </div>
          <div className="divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
            {(data?.festivals ?? []).map((f: any) => (
              <div
                key={f.id}
                className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
              >
                <Link
                  to="/ssp/festivals/$festivalId"
                  params={{ festivalId: f.id }}
                  className="min-w-0 hover:text-accent"
                >
                  <p className="font-medium">{f.name}</p>
                  <p className="text-sm text-muted">
                    {f.city} · {f.starts_on} – {f.ends_on}
                    {f.copartner ? " · Co-partner" : ""}
                  </p>
                </Link>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="tabular-nums text-muted">{f.participants} pax</span>
                  <StatusBadge status={f.status} />
                  <Link
                    to="/admin/$festivalId"
                    params={{ festivalId: f.id }}
                    className="rounded-md px-2 py-1 text-xs text-muted hover:bg-surface-2 hover:text-fg"
                  >
                    Command
                  </Link>
                  {f.status !== "LIVE" && f.status !== "ENDED" ? (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={goLive.isPending}
                      onClick={() => goLive.mutate(f.id)}
                    >
                      Go live
                    </Button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="lg:col-span-2">
          <h2 className="mb-3 font-display text-2xl tracking-tight">Pending work</h2>
          <div className="divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
            {pending.length === 0 && requested.length === 0 && drafts.length === 0 ? (
              <p className="px-5 py-6 text-sm text-muted">No pending HQ work.</p>
            ) : (
              <>
                {pending.map((a: any) => (
                  <div key={a.id} className="px-5 py-4">
                    <p className="text-xs tracking-wide text-muted uppercase">Application</p>
                    <p className="mt-1 font-medium">{a.festival_name}</p>
                    <p className="text-sm text-muted">
                      {a.organization_name} · {a.package_name}
                    </p>
                  </div>
                ))}
                {requested.map((a: any) => (
                  <div key={a.id} className="px-5 py-4">
                    <p className="text-xs tracking-wide text-accent uppercase">Co-partner request</p>
                    <p className="mt-1 font-medium">{a.festival_name}</p>
                  </div>
                ))}
                {drafts.slice(0, 4).map((f: any) => (
                  <div key={f.id} className="px-5 py-4">
                    <p className="text-xs tracking-wide text-muted uppercase">Not live</p>
                    <p className="mt-1 font-medium">{f.name}</p>
                    <p className="text-sm text-muted">{f.status}</p>
                  </div>
                ))}
              </>
            )}
            <div className="px-5 py-3">
              <Link to="/ssp/applications">
                <Button size="sm" variant="outline">
                  Open intake
                </Button>
              </Link>
            </div>
          </div>

          <h2 className="mt-8 mb-3 font-display text-2xl tracking-tight">Assigned Super Admins</h2>
          <div className="divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
            {hqOps.map((o: any) => (
              <div key={o.id} className="flex items-center justify-between gap-3 px-5 py-3">
                <div>
                  <p className="font-medium">{o.display_name}</p>
                  <p className="font-mono text-xs text-accent">{o.username}</p>
                  <p className="text-xs text-subtle">{hqTitle(o.username)}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs tracking-wide text-muted uppercase">
                  <Shield className="size-3" />
                  HQ
                </span>
              </div>
            ))}
            <div className="px-5 py-3">
              <Link to="/ssp/users" className="text-sm text-muted hover:text-fg">
                Access keys
              </Link>
            </div>
          </div>
        </section>
      </div>

      <h2 className="mt-10 font-display text-2xl tracking-tight">Network events</h2>
      <div className="mt-3 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
        {(data?.events ?? []).map((e: any) => (
          <Link
            key={e.id}
            to="/admin/$festivalId/events/$eventId"
            params={{ festivalId: e.festival_id, eventId: e.id }}
            className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 hover:bg-surface-2"
          >
            <div>
              <p className="font-medium">{e.name}</p>
              <p className="text-sm text-muted">
                {e.festival_name} · {shortDay(e.starts_at)}
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="capitalize">{e.event_type}</span>
              <span className="tabular-nums">
                {e.checkin_count}/{e.registered_count}
              </span>
              <StatusBadge status={e.status} />
            </div>
          </Link>
        ))}
      </div>

      <CreateCopartnerDialog open={open} onOpenChange={setOpen} />
    </Page>
  );
}

function HqAction({
  to,
  icon,
  title,
  body,
}: {
  to: "/ssp/festivals" | "/ssp/events" | "/ssp/applications" | "/ssp/analytics" | "/ssp/users";
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Link
      to={to}
      className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
    >
      <div className="flex size-9 items-center justify-center rounded-md bg-surface-2 text-accent">
        {icon}
      </div>
      <p className="mt-4 font-medium">{title}</p>
      <p className="mt-1 text-sm text-muted">{body}</p>
    </Link>
  );
}
