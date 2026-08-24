import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { EsaulogMark } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { setOperatorSession } from "@/lib/operator-session";
import { signInSsp } from "@/lib/server/operator-auth";

export const Route = createFileRoute("/ssp/login")({ component: SspLogin });

function SspLogin() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const mut = useMutation({
    mutationFn: () => signInSsp({ data: { username, password } }),
    onSuccess: (res) => {
      setOperatorSession(res.token, res.profile);
      void nav({ to: "/ssp" });
    },
  });
  return (
    <main className="grid min-h-screen place-items-center px-4 py-12">
      <div className="w-full max-w-sm">
        <Link to="/" className="mb-8 flex items-center gap-2 text-muted">
          <EsaulogMark className="size-8" />
          <span className="font-display text-2xl text-fg">eSAULOG SSP</span>
        </Link>
        <h1 className="font-display text-3xl tracking-tight">Solution System Portal</h1>
        <p className="mt-2 text-sm text-muted">TukodPH operator access only.</p>
        <form
          className="mt-8 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            mut.mutate();
          }}
        >
          <div className="grid gap-1">
            <Label htmlFor="ssp-id">User ID</Label>
            <Input
              id="ssp-id"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="ssp-key">Passkey</Label>
            <Input
              id="ssp-key"
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
            {mut.isPending ? "Verifying…" : "Enter SSP"}
          </Button>
        </form>
      </div>
    </main>
  );
}
