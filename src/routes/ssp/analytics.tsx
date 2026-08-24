import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Page, PageHeader, Stat } from "@/components/shell";
import { StatusBadge } from "@/components/status-badge";
import { compact, php } from "@/lib/format";
import { getHqEconomics } from "@/lib/server/erp";

export const Route = createFileRoute("/ssp/analytics")({ component: EconomicsPage });

function EconomicsPage() {
  const { data } = useQuery({ queryKey: ["hq"], queryFn: () => getHqEconomics() });
  const t = data?.totals;
  const chart = (data?.byFestival ?? []).map((f) => ({
    name: f.name.replace(/ 20\d\d/, ""),
    physical: f.physical,
    digital: f.digital,
  }));
  return (
    <Page>
      <PageHeader
        eyebrow="Super Admin HQ"
        title="Turnout, income, sponsors"
        description="Network economics across tenants. Co-partner commission is 30% of digital sponsor income only."
      />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Stat label="Turnout" value={t ? compact(t.turnout) : "—"} hint="Registered participants" />
        <Stat label="Check-ins" value={t ? compact(t.checkins) : "—"} />
        <Stat label="Physical income" value={t ? php(t.physical) : "—"} />
        <Stat label="Digital income" value={t ? php(t.digital) : "—"} />
        <Stat
          label="Co-partner 30%"
          value={data ? php(data.commission) : "—"}
          hint="Digital only"
        />
      </div>
      <div className="mt-8 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <p className="mb-4 text-xs tracking-wide text-muted uppercase">Sponsor income by tenant</p>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={chart}>
            <CartesianGrid stroke="rgba(242,239,230,0.08)" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#9a9588", fontSize: 11 }} />
            <YAxis tick={{ fill: "#9a9588", fontSize: 11 }} />
            <Tooltip
              contentStyle={{ background: "#141612", border: "1px solid #2a2c26", color: "#f2efe6" }}
            />
            <Bar dataKey="physical" fill="#9a9588" radius={[4, 4, 0, 0]} />
            <Bar dataKey="digital" fill="#d8ddd4" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="text-xs tracking-wide text-muted uppercase">
            <tr className="border-b border-border">
              <th className="px-4 py-3">Festival</th>
              <th className="px-4 py-3">Turnout</th>
              <th className="px-4 py-3">In</th>
              <th className="px-4 py-3">Physical</th>
              <th className="px-4 py-3">Digital</th>
              <th className="px-4 py-3">Model</th>
            </tr>
          </thead>
          <tbody>
            {(data?.byFestival ?? []).map((f) => (
              <tr key={f.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <Link
                    to="/admin/$festivalId"
                    params={{ festivalId: f.id }}
                    className="font-medium hover:underline"
                  >
                    {f.name}
                  </Link>
                  <StatusBadge status={f.status} />
                </td>
                <td className="px-4 py-3 tabular-nums">{compact(f.turnout)}</td>
                <td className="px-4 py-3 tabular-nums">{compact(f.checkins)}</td>
                <td className="px-4 py-3 tabular-nums">{php(f.physical)}</td>
                <td className="px-4 py-3 tabular-nums">{php(f.digital)}</td>
                <td className="px-4 py-3 text-muted">
                  {f.copartner ? "Co-partner 30%" : "Self-serve"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Page>
  );
}
