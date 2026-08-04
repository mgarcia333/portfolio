"use client";

import { TiltCard } from "@/components/ui/tilt-card";
import { CornerBrackets } from "@/components/ui/corner-brackets";

interface DossierField {
  label: string;
  value: string;
}

interface DossierBentoProps {
  name: string;
  role: string;
  initials: string;
  fields: DossierField[];
  signalActive?: string;
  className?: string;
}

export function DossierBento({ name, role, initials, fields, signalActive, className }: DossierBentoProps) {
  // fields is always [Name, Role, Base, Currently, Education, Status] — the header
  // already shows name/role, so only the remaining facts get their own cell.
  const facts = fields.slice(2);

  return (
    <TiltCard className={className} max={4}>
      <CornerBrackets />
      <div className="grid grid-cols-1 gap-px bg-outline-variant sm:grid-cols-3">
        <div className="flex items-center gap-4 bg-surface-container p-6 sm:col-span-2">
          <div className="text-tag flex size-12 shrink-0 items-center justify-center border border-outline text-sm text-primary">
            {initials}
          </div>
          <div>
            <p className="font-display text-on-surface">{name}</p>
            <p className="text-tag text-xs text-on-surface-muted">{role}</p>
          </div>
        </div>

        {facts.map((field) => (
          <div key={field.label} className="bg-surface-container p-5">
            <p className="text-tag text-[10px] text-on-surface-muted">{field.label}</p>
            <p className="mt-1.5 text-sm text-on-surface">{field.value}</p>
          </div>
        ))}

        {signalActive ? (
          <div className="text-tag flex items-center gap-2 bg-surface-container p-4 text-[11px] text-primary sm:col-span-3">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-1.5 animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            {signalActive}
          </div>
        ) : null}
      </div>
    </TiltCard>
  );
}
