import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { SspGate } from "@/components/operator-gate";
import { TopBar } from "@/components/shell";

export const Route = createFileRoute("/ssp")({ component: SspLayout });

function SspLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/ssp/login") return <Outlet />;
  return (
    <SspGate>
      <div className="min-h-screen">
        <TopBar
          kicker="Solution System Portal"
          items={[
            { to: "/hub", label: "Desk" },
            { to: "/ssp", label: "Overview" },
            { to: "/ssp/festivals", label: "Tenants" },
            { to: "/ssp/applications", label: "Applications" },
            { to: "/ssp/analytics", label: "Economics" },
            { to: "/ssp/organizations", label: "Organizations" },
            { to: "/ssp/users", label: "Users" },
          ]}
        />
        <Outlet />
      </div>
    </SspGate>
  );
}
