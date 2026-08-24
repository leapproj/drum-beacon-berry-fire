import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Page, PageHeader } from "@/components/shell";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input, Label } from "@/components/ui/input";
import { createFestivalTenant, getSspOverview } from "@/lib/server/ssp";
import { toast } from "sonner";

export const Route = createFileRoute("/ssp/festivals")({ component: FestivalsPage });

function FestivalsPage() {
  const { data } = useQuery({ queryKey: ["ssp"], queryFn: () => getSspOverview() });
  const [open, setOpen] = useState(false);
  return (
    <Page>
      <PageHeader
        eyebrow="Tenants"
        title="Festival tenants"
        description="Each create-festival action provisions public site, admin, participant, gate, vendor, sponsor, analytics, and AI organizer."
        actions={<Button onClick={() => setOpen(true)}>Create festival</Button>}
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {(data?.festivals ?? []).map((f) => (
          <Link
            key={f.id}
            to="/ssp/festivals/$festivalId"
            params={{ festivalId: f.id }}
            className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
          >
            <div className="flex items-start justify-between">
              <span className="grid size-10 place-items-center rounded-md bg-surface-2 font-display">
                {f.logo_text}
              </span>
              <StatusBadge status={f.status} />
            </div>
            <h3 className="mt-4 font-display text-2xl">{f.name}</h3>
            <p className="mt-1 text-sm text-muted">
              {f.city}, {f.province}
            </p>
          </Link>
        ))}
      </div>
      <CreateDialog open={open} onOpenChange={setOpen} />
    </Page>
  );
}

function CreateDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const nav = useNavigate();
  const qc = useQueryClient();
  const [form, setForm] = useState({
    name: "",
    slug: "",
    city: "",
    province: "",
    starts_on: "2026-11-01",
    ends_on: "2026-11-07",
    organizer_name: "",
    contact_email: "",
    tagline: "",
  });
  const mut = useMutation({
    mutationFn: () => createFestivalTenant({ data: form }),
    onSuccess: async (res) => {
      toast.success("Festival tenant created");
      await qc.invalidateQueries({ queryKey: ["ssp"] });
      onOpenChange(false);
      void nav({ to: "/ssp/festivals/$festivalId", params: { festivalId: res.id } });
    },
    onError: (e: Error) => toast.error(e.message),
  });
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>Create festival</DialogTitle>
        <DialogDescription>
          SSP asks for identity, place, dates, and organizer. The system generates the tenant.
        </DialogDescription>
        <form
          className="mt-4 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            mut.mutate();
          }}
        >
          {(
            [
              ["name", "Festival name"],
              ["slug", "Slug"],
              ["city", "City / municipality"],
              ["province", "Province"],
              ["organizer_name", "Official organizer"],
              ["contact_email", "Contact email"],
              ["tagline", "Tagline"],
            ] as const
          ).map(([key, label]) => (
            <div key={key} className="grid gap-1">
              <Label htmlFor={key}>{label}</Label>
              <Input
                id={key}
                required={key !== "tagline"}
                value={form[key]}
                onChange={(e) => {
                  const v = e.target.value;
                  setForm((f) => ({
                    ...f,
                    [key]: v,
                    ...(key === "name" && !f.slug
                      ? { slug: v.toLowerCase().replace(/[^a-z0-9]+/g, "-") }
                      : {}),
                  }));
                }}
              />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1">
              <Label htmlFor="starts_on">Starts</Label>
              <Input
                id="starts_on"
                type="date"
                value={form.starts_on}
                onChange={(e) => setForm((f) => ({ ...f, starts_on: e.target.value }))}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="ends_on">Ends</Label>
              <Input
                id="ends_on"
                type="date"
                value={form.ends_on}
                onChange={(e) => setForm((f) => ({ ...f, ends_on: e.target.value }))}
              />
            </div>
          </div>
          <Button type="submit" disabled={mut.isPending}>
            {mut.isPending ? "Creating…" : "Generate tenant"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
