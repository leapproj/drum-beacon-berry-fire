import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Input, Label } from "./ui/input";
import { createFestivalTenant } from "@/lib/server/ssp";
import { toast } from "sonner";

export function CreateCopartnerDialog({
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
    organizer_name: "TukodPH Product Ops",
    contact_email: "festivals@tukodph.com",
    tagline: "",
    copartner: true,
  });
  const mut = useMutation({
    mutationFn: () => createFestivalTenant({ data: form }),
    onSuccess: async (res) => {
      toast.success(res.copartner ? "Co-partner tenant created" : "Festival tenant created");
      await qc.invalidateQueries({ queryKey: ["ssp"] });
      onOpenChange(false);
      void nav({ to: "/ssp/festivals/$festivalId", params: { festivalId: res.id } });
    },
    onError: (e: Error) => toast.error(e.message),
  });
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogTitle>Create festival as co-partner</DialogTitle>
        <DialogDescription>
          TukodPH Headquarters provisions the tenant and operates the digital festival. Physical
          sponsors stay with the organizer. Commission is 30% of digital sponsor income.
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
              <Label htmlFor={`hq-${key}`}>{label}</Label>
              <Input
                id={`hq-${key}`}
                required={key !== "tagline"}
                value={form[key] as string}
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
              <Label htmlFor="hq-starts">Starts</Label>
              <Input
                id="hq-starts"
                type="date"
                value={form.starts_on}
                onChange={(e) => setForm((f) => ({ ...f, starts_on: e.target.value }))}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="hq-ends">Ends</Label>
              <Input
                id="hq-ends"
                type="date"
                value={form.ends_on}
                onChange={(e) => setForm((f) => ({ ...f, ends_on: e.target.value }))}
              />
            </div>
          </div>
          <label className="flex items-start gap-3 rounded-lg bg-surface-2 p-3 text-sm">
            <input
              type="checkbox"
              className="mt-1 size-4 accent-accent"
              checked={form.copartner}
              onChange={(e) => setForm((f) => ({ ...f, copartner: e.target.checked }))}
            />
            <span>
              <span className="font-medium">TukodPH digital co-partner</span>
              <span className="mt-0.5 block text-muted">
                HQ operates the digital festival. 30% of digital sponsor income. Leave on for the
                co-partner value proposition.
              </span>
            </span>
          </label>
          <Button type="submit" disabled={mut.isPending}>
            {mut.isPending ? "Provisioning…" : "Generate tenant"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
