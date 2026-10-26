import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  /** `alt` paints the slightly darker paper used to vary the rhythm. */
  tone?: "base" | "alt";
  children: ReactNode;
}

/** Every section opens with a hairline rule, like a column in a newspaper. */
export function Section({ id, tone = "base", children }: SectionProps) {
  return (
    <section id={id} className={cn("border-t border-ink py-20 sm:py-28", tone === "alt" && "bg-paper-2")}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
