import { cn } from "@/lib/utils";

/** Thin purple strip with a short neon-green segment: the one EVA-01 nod in the layout. */
export function AccentBar({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-[3px] w-full bg-[linear-gradient(90deg,var(--brand)_0_72%,var(--signal)_72%_88%,var(--brand)_88%_100%)]",
        className
      )}
    />
  );
}
