import { HandNote, ScribbleArrow, Squiggle } from "@/components/ui/doodles";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  /** Short line of handwriting next to the title, with an arrow. */
  note?: string;
  /** Scribbled underline under the title. */
  squiggle?: boolean;
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  note,
  squiggle = false,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <div className="flex flex-wrap items-end gap-x-8 gap-y-3">
        <Tag className="display text-[clamp(3rem,9vw,6.5rem)] text-balance">
          <span className="relative inline-block">
            {title}
            {squiggle ? <Squiggle className="-bottom-3" /> : null}
          </span>
        </Tag>
        {note ? (
          <span className="flex -rotate-3 items-end gap-1 pb-2" aria-hidden="true">
            <ScribbleArrow className="-scale-x-100 rotate-[200deg]" />
            <HandNote className="mb-1">{note}</HandNote>
          </span>
        ) : null}
      </div>
      {description ? (
        <p className="mt-7 max-w-xl text-lg text-pretty text-ink-soft">{description}</p>
      ) : null}
    </div>
  );
}
