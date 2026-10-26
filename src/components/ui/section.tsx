import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  /** `alt` paints the slightly lighter band used to separate sections. */
  tone?: "base" | "alt";
  children: ReactNode;
}

export function Section({ id, tone = "base", children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("border-b border-line py-20 sm:py-24", tone === "alt" && "bg-canvas-alt")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
