import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Page, PageHeader } from "@/components/shell";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { getHqEconomics, setApplicationStatus, setCopartnerStatus } from "@/lib/server/erp";

export const Route = createFileRoute("/ssp/applications")({ component: AppsPage });

function AppsPage() {
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["hq"], queryFn: () => getHqEconomics() });
  const setApp = useMutation({
    mutationFn: (input: { id: string; status: string }) => setApplicationStatus({ data: input }),
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["hq"] });
      void qc.invalidateQueries({ queryKey: ["ssp"] });
    },
  });
  const setCp = useMutation({
    mutationFn: (input: { id: string; status: string }) => setCopartnerStatus({ data: input }),
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ["hq"] });
      void qc.invalidateQueries({ queryKey: ["ssp"] });
    },
  });
  return (
    <Page>
      <PageHeader
        eyebrow="Intake"
        title="Tenant applications"
        description="Organizers apply from the public site. Super Admin HQ approves self-serve licenses or activates TukodPH as digital co-partner (30% of digital sponsor income)."
      />
      <div className="divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
        {(data?.apps ?? []).length === 0 ? (
          <p className="px-5 py-6 text-sm text-muted">No applications yet.</p>
        ) : (
          (data?.apps ?? []).map((a: any) => (
            <div key={a.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <div>
                <p className="font-medium">{a.festival_name}</p>
                <p className="text-sm text-muted">
                  {a.organization_name} · {a.city} · {a.package_name}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <StatusBadge status={a.status} />
                {a.festival_id ? (
                  <Link
                    to="/admin/$festivalId"
                    params={{ festivalId: a.festival_id }}
                    className="text-sm text-muted hover:text-fg"
                  >
                    Command
                  </Link>
                ) : null}
                {a.status === "pending" ? (
                  <>
                    <Button size="sm" onClick={() => setApp.mutate({ id: a.id, status: "approved" })}>
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setApp.mutate({ id: a.id, status: "rejected" })}
                    >
                      Reject
                    </Button>
                  </>
                ) : null}
              </div>
            </div>
          ))
        )}
      </div>
      <h2 className="mt-10 font-display text-2xl">Co-partner agreements</h2>
      <p className="mt-1 text-sm text-muted">
        30% of digital sponsor income. Physical festival sponsors are out of scope.
      </p>
      <div className="mt-4 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
        {(data?.agreements ?? []).map((a: any) => (
          <div key={a.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <div>
              <p className="font-medium">{a.festival_name}</p>
              <p className="text-sm text-muted">
                {a.commission_pct}% digital · {a.notes}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <StatusBadge status={a.status} />
              {a.status === "requested" ? (
                <Button size="sm" onClick={() => setCp.mutate({ id: a.id, status: "active" })}>
                  Activate
                </Button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
