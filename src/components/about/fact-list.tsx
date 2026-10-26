import type { Fact } from "@/i18n";
import { cn } from "@/lib/utils";

/** The basics at a glance: a plain ruled list, not a card. */
export function FactList({ facts, className }: { facts: Fact[]; className?: string }) {
  return (
    <dl className={cn("border-t border-ink", className)}>
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
        >
          <dt className="text-sm text-ink-muted">{fact.label}</dt>
          <dd className="text-right font-medium">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
