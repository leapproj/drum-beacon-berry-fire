import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Page, PageHeader } from "@/components/shell";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { getSspOverview, updateFestivalStatus } from "@/lib/server/ssp";
import { toast } from "sonner";

export const Route = createFileRoute("/ssp/festivals/$festivalId")({
  component: TenantDetail,
});

const STATUSES = ["DRAFT", "PLANNING", "SETUP", "LIVE"] as const;

function TenantDetail() {
  const { festivalId } = Route.useParams();
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["ssp"], queryFn: () => getSspOverview() });
  const f = data?.festivals.find((x) => x.id === festivalId);
  const mut = useMutation({
    mutationFn: (status: string) => updateFestivalStatus({ data: { id: festivalId, status } }),
    onSuccess: () => {
      toast.success("Status updated");
      void qc.invalidateQueries({ queryKey: ["ssp"] });
    },
  });
  if (!f) return <Page>Loading tenant…</Page>;
  return (
    <Page>
      <PageHeader
        eyebrow="Tenant"
        title={f.name}
        description={`${f.city}, ${f.province} · ${f.starts_on} – ${f.ends_on} · ${f.timezone}`}
        actions={
          <div className="flex flex-wrap gap-2">
            <Link to="/admin/$festivalId" params={{ festivalId: f.id }}>
              <Button>Open command center</Button>
            </Link>
            <Link to="/admin/$festivalId/cms" params={{ festivalId: f.id }}>
              <Button variant="outline">CMS</Button>
            </Link>
            <Link to="/admin/$festivalId/income" params={{ festivalId: f.id }}>
              <Button variant="outline">Income</Button>
            </Link>
          </div>
        }
      />
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <p className="text-xs tracking-wide text-muted uppercase">License status</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {STATUSES.map((s) => (
              <Button
                key={s}
                size="sm"
                variant={f.status === s ? "default" : "outline"}
                onClick={() => mut.mutate(s)}
              >
                {s}
              </Button>
            ))}
          </div>
          <div className="mt-4">
            <StatusBadge status={f.status} />
          </div>
        </div>
        <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <p className="text-xs tracking-wide text-muted uppercase">Generated surfaces</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {[
              { t: "Public website", href: `/f/${f.slug}` },
              { t: "Planning desk", href: `/admin/${f.id}/planning` },
              { t: "Event calendar", href: `/admin/${f.id}/events` },
              { t: "Participant portal", href: "/p" },
              { t: "Gate staff", href: "/gate" },
              { t: "Vendor portal", href: "/vendor" },
              { t: "Sponsor environment", href: "/sponsor" },
              { t: "Analytics", href: `/admin/${f.id}/analytics` },
            ].map((s) => (
              <li key={s.t} className="flex items-center justify-between border-b border-border py-1.5">
                <a href={s.href} className="hover:text-fg">
                  {s.t}
                </a>
                <span className="text-ok">Open</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-muted">Organizer</dt>
          <dd className="mt-1">{f.organizer_name}</dd>
        </div>
        <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-muted">Contact</dt>
          <dd className="mt-1">{f.contact_email}</dd>
        </div>
        <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-muted">Slug</dt>
          <dd className="mt-1 font-mono">{f.slug}</dd>
        </div>
        <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
          <dt className="text-muted">Participants / events</dt>
          <dd className="mt-1 tabular-nums">
            {f.participants} / {f.events}
          </dd>
        </div>
      </dl>
    </Page>
  );
}
