import type { Fact } from "@/i18n";

interface AboutNoteProps {
  name: string;
  role: string;
  facts: Fact[];
  status: string;
}

/** An index card taped to the page, instead of a dashboard-style stats block. */
export function AboutNote({ name, role, facts, status }: AboutNoteProps) {
  return (
    <div className="relative rotate-[1.5deg] border-2 border-ink bg-card p-6 pt-9 shadow-hard sm:p-8 sm:pt-10">
      <span
        aria-hidden="true"
        className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-3 border border-ink/25 bg-highlight/85"
      />

      <p className="display text-4xl sm:text-5xl">{name}</p>
      <p className="mt-1 font-hand text-3xl text-accent-strong">{role}</p>

      <dl className="mt-6 divide-y-2 divide-ink border-y-2 border-ink">
        {facts.map((fact) => (
          <div key={fact.label} className="flex items-baseline justify-between gap-6 py-3">
            <dt className="font-hand text-2xl text-ink-muted">{fact.label}</dt>
            <dd className="text-right font-bold">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 flex items-center gap-2.5 text-sm font-bold">
        <span className="size-2.5 shrink-0 rounded-full border border-ink bg-ok" aria-hidden="true" />
        {status}
      </p>
    </div>
  );
}
