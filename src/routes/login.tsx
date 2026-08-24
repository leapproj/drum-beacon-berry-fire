import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { EsaulogMark } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { setOperatorSession } from "@/lib/operator-session";
import { signInTenant } from "@/lib/server/operator-auth";

export const Route = createFileRoute("/login")({ component: Login });

const DEMOS = [
  { id: "higalaay", pass: "higalaay2026", name: "Higalaay 2026" },
  { id: "diyandi", pass: "diyandi2026", name: "Diyandi 2026" },
  { id: "lanzones", pass: "lanzones2026", name: "Lanzones 2026" },
];

function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const mut = useMutation({
    mutationFn: () => signInTenant({ data: { username, password } }),
    onSuccess: (res) => {
      setOperatorSession(res.token, res.profile);
      void nav({ to: "/hub" });
    },
  });
  return (
    <main className="sunburst grid min-h-screen place-items-center px-4 py-12">
      <div className="w-full max-w-sm">
        <Link to="/" className="mb-8 flex items-center gap-2 text-muted">
          <EsaulogMark className="size-8" />
          <span className="font-display text-2xl text-fg">eSAULOG</span>
        </Link>
        <h1 className="font-display text-3xl tracking-tight">Tenant sign in</h1>
        <p className="mt-2 text-sm text-muted">
          Enter your organizer ID and passkey to continue drafting, organizing, and publishing.
        </p>
        <form
          className="mt-8 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            mut.mutate();
          }}
        >
          <div className="grid gap-1">
            <Label htmlFor="username">User ID</Label>
            <Input
              id="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="password">Passkey</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {mut.isError ? (
            <p className="text-sm text-danger">{(mut.error as Error).message}</p>
          ) : null}
          <Button type="submit" disabled={mut.isPending}>
            {mut.isPending ? "Signing in…" : "Enter command center"}
          </Button>
        </form>
        <p className="mt-6 text-sm text-muted">
          New organizer?{" "}
          <Link to="/apply" className="text-fg underline-offset-4 hover:underline">
            Sign up as a tenant
          </Link>
        </p>
        <div className="mt-8 rounded-xl bg-surface p-4 text-sm shadow-[var(--shadow-border)]">
          <p className="text-xs tracking-wide text-muted uppercase">Demo tenant desks</p>
          <ul className="mt-3 space-y-2">
            {DEMOS.map((d) => (
              <li key={d.id} className="flex items-center justify-between gap-2">
                <span>
                  {d.name}
                  <span className="mt-0.5 block font-mono text-xs text-subtle">
                    {d.id} · {d.pass}
                  </span>
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  type="button"
                  onClick={() => {
                    setUsername(d.id);
                    setPassword(d.pass);
                  }}
                >
                  Use
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-xs text-subtle">
          Gate staff do not need an account — open a festival and enter with an access key.
        </p>
        <p className="mt-3 text-xs text-subtle">
          <Link to="/ssp/login" className="underline-offset-4 hover:underline">
            TukodPH operators
          </Link>
        </p>
      </div>
    </main>
  );
}
