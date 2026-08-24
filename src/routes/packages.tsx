import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SiteFooter, SiteNav } from "@/components/site-nav";
import { Button } from "@/components/ui/button";
import { php } from "@/lib/format";
import { listPackages } from "@/lib/server/erp";

export const Route = createFileRoute("/packages")({ component: PackagesPage });

function PackagesPage() {
  const { data } = useQuery({ queryKey: ["packages"], queryFn: () => listPackages() });
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-xs tracking-[0.28em] text-muted uppercase">Licenses</p>
        <h1 className="mt-3 font-display text-5xl tracking-tight">Packages</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Season licenses for organizers who want to run eSAULOG themselves — and a co-partner
          option when you want TukodPH to create and manage the digital festival.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {(data ?? []).map((p) => {
            const features = JSON.parse(p.features_json || "[]") as string[];
            return (
              <article key={p.id} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
                <p className="text-xs tracking-wide text-muted uppercase">
                  {p.kind === "copartner" ? "Value proposition" : "Self-serve"}
                </p>
                <h2 className="mt-2 font-display text-3xl">{p.name}</h2>
                <p className="mt-2 font-display text-2xl tabular-nums">
                  {p.price_php > 0 ? php(p.price_php) : "Commission"}
                </p>
                <p className="text-xs text-subtle">{p.billing}</p>
                <p className="mt-4 text-sm text-muted">{p.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {features.map((f) => (
                    <li key={f} className="text-muted">
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/apply" search={{ package: p.slug }} className="mt-6 inline-block">
                  <Button variant={p.kind === "copartner" ? "default" : "outline"}>
                    {p.kind === "copartner" ? "Sign up — co-partner at publish" : "Sign up as tenant"}
                  </Button>
                </Link>
              </article>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
