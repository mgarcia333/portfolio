import { TechChip } from "@/components/ui/tech-chip";
import type { ExperienceEntry } from "@/i18n";
import { cn } from "@/lib/utils";

type Entry = ExperienceEntry & { highlights?: string[]; stack?: string[] };

export function ExperienceList({ entries }: { entries: Entry[] }) {
  return (
    <ol className="border-b border-line">
      {entries.map((entry) => (
        <li
          key={entry.org}
          className="grid gap-4 border-t border-line py-7 md:grid-cols-[9rem_1fr] md:gap-8"
        >
          <div>
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium",
                entry.current
                  ? "border-signal/50 bg-signal/10 text-fg"
                  : "border-line-strong text-fg-muted"
              )}
            >
              {entry.current ? (
                <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
              ) : null}
              {entry.status}
            </span>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{entry.org}</h3>
            <p className="mt-1 font-medium text-brand-text">{entry.role}</p>
            <p className="mt-3 max-w-xl text-pretty text-fg-soft">{entry.description}</p>

            {entry.highlights ? (
              <ul className="mt-5 max-w-xl space-y-2.5">
                {entry.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-fg-soft">
                    <span
                      className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-brand-text"
                      aria-hidden="true"
                    />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {entry.stack ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {entry.stack.map((tech) => (
                  <li key={tech}>
                    <TechChip label={tech} />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
