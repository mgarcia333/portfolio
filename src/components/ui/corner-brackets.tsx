import { cn } from "@/lib/utils";

export function CornerBrackets({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden="true">
      <span className="absolute -top-px -left-px h-2.5 w-2.5 border-t border-l border-primary/60 transition-colors duration-300 group-hover:border-primary" />
      <span className="absolute -top-px -right-px h-2.5 w-2.5 border-t border-r border-primary/60 transition-colors duration-300 group-hover:border-primary" />
      <span className="absolute -bottom-px -left-px h-2.5 w-2.5 border-b border-l border-primary/60 transition-colors duration-300 group-hover:border-primary" />
      <span className="absolute -bottom-px -right-px h-2.5 w-2.5 border-b border-r border-primary/60 transition-colors duration-300 group-hover:border-primary" />
    </div>
  );
}
