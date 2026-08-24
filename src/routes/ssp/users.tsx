import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Page, PageHeader } from "@/components/shell";
import { getSspOverview } from "@/lib/server/ssp";

export const Route = createFileRoute("/ssp/users")({ component: UsersPage });

function UsersPage() {
  const { data } = useQuery({ queryKey: ["ssp"], queryFn: () => getSspOverview() });
  return (
    <Page>
      <PageHeader
        eyebrow="Access"
        title="Platform users"
        description="SSP membership is granted on first sign-in in this environment so operators can tour every surface."
      />
      <div className="divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
        {(data?.members ?? []).map((m) => (
          <div key={m.user_id} className="flex flex-wrap items-center justify-between gap-2 px-5 py-4">
            <div>
              <p className="font-mono text-sm">{m.user_id}</p>
              <p className="text-xs text-muted">{m.created_at}</p>
            </div>
            <span className="text-xs tracking-wide text-muted uppercase">{m.role}</span>
          </div>
        ))}
      </div>
      <h2 className="mt-10 font-display text-2xl">Audit log</h2>
      <div className="mt-3 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-border)]">
        {(data?.auditLogs ?? []).map((a) => (
          <div key={a.id} className="flex justify-between gap-3 px-5 py-3 text-sm">
            <span>
              {a.action} · {a.entity}
            </span>
            <span className="text-muted tabular-nums">{a.created_at}</span>
          </div>
        ))}
      </div>
    </Page>
  );
}
