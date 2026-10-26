import type { ExperienceEntry } from "@/i18n";
import { cn } from "@/lib/utils";

type Entry = ExperienceEntry & { highlights?: string[]; stack?: string[] };

interface ExperienceListProps {
  entries: Entry[];
  /** Heading level for each role, so the page keeps a clean outline. */
  headingAs?: "h2" | "h3";
}

export function ExperienceList({ entries, headingAs: Heading = "h3" }: ExperienceListProps) {
  return (
    <ol className="border-t border-ink">
      {entries.map((entry) => (
        <li
          key={entry.org}
          className="grid gap-3 border-b border-line py-8 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8"
        >
          <p
            className={cn(
              "pt-2 text-sm font-medium",
              entry.current ? "text-ink" : "text-ink-muted"
            )}
          >
            {entry.status}
          </p>

          <div>
            <Heading className="display text-[clamp(1.75rem,3vw,2.5rem)] text-balance">
              {entry.org}
            </Heading>
            <p className="mt-2 font-semibold text-accent">{entry.role}</p>
            <p className="mt-3 max-w-xl text-pretty text-ink-soft">{entry.description}</p>

            {entry.highlights ? (
              <ul className="mt-5 max-w-xl space-y-2.5">
                {entry.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-ink-soft">
                    <span className="mt-[0.8em] h-px w-4 shrink-0 bg-ink" aria-hidden="true" />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {entry.stack ? (
              <p className="mt-5 text-sm text-ink-muted">{entry.stack.join(" · ")}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
