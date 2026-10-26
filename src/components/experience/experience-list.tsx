import { TechChip } from "@/components/ui/tech-chip";
import type { ExperienceEntry } from "@/i18n";
import { cn } from "@/lib/utils";

type Entry = ExperienceEntry & { highlights?: string[]; stack?: string[] };

export function ExperienceList({ entries }: { entries: Entry[] }) {
  return (
    <ol className="border-t-2 border-ink">
      {entries.map((entry) => (
        <li
          key={entry.org}
          className="grid gap-5 border-b-2 border-ink py-8 md:grid-cols-[15rem_1fr] md:gap-10"
        >
          <div>
            <span
              className={cn(
                "inline-block border-2 border-ink px-3 py-1 text-sm font-bold",
                entry.current
                  ? "-rotate-2 bg-highlight text-highlight-ink shadow-hard-sm"
                  : "bg-card"
              )}
            >
              {entry.status}
            </span>
          </div>

          <div>
            <h3 className="display text-4xl sm:text-5xl">{entry.org}</h3>
            <p className="mt-2 text-lg font-bold text-ink-soft">{entry.role}</p>
            <p className="mt-3 max-w-xl text-pretty text-ink-soft">{entry.description}</p>

            {entry.highlights ? (
              <ul className="mt-5 max-w-xl space-y-2.5">
                {entry.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-ink-soft">
                    <span
                      className="mt-[0.7em] h-0.5 w-4 shrink-0 bg-accent-strong"
                      aria-hidden="true"
                    />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {entry.stack ? (
              <ul className="mt-6 flex flex-wrap gap-2">
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
