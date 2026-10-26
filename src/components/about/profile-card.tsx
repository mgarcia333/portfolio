import { AccentBar } from "@/components/ui/accent-bar";
import type { Fact } from "@/i18n";

/** The basics at a glance: a plain definition list on a card. */
export function ProfileCard({ facts }: { facts: Fact[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <AccentBar />
      <dl className="divide-y divide-line">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="flex items-baseline justify-between gap-6 px-6 py-4"
          >
            <dt className="text-sm text-fg-muted">{fact.label}</dt>
            <dd className="text-right font-medium">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
