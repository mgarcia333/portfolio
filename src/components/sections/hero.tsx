import { useId } from "react";
import { profile } from "@/data/content";
import { MagneticButton } from "@/components/ui/magnetic-button";

function RotatingBadge() {
  const pathId = useId();
  const text = "FULL-STACK DEVELOPER • BARCELONA, ES • ";

  return (
    <div className="relative hidden size-56 shrink-0 lg:block">
      <div className="absolute top-1/2 left-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-outline-variant" />
      <div className="absolute top-1/2 left-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-outline-variant" />
      <div className="absolute top-1/2 left-1/2 size-32 -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="size-full text-on-surface-muted">
          <defs>
            <path id={pathId} d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text fill="currentColor" fontSize="5.6" letterSpacing="1">
            <textPath href={`#${pathId}`}>{text.repeat(2)}</textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-tag flex size-11 items-center justify-center rounded-full border border-outline text-[10px] text-primary">
            M_G
          </span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="text-tag mb-6 flex items-center gap-2 text-xs text-on-surface-muted">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-1.5 animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            {profile.coordinates} — {profile.location}
          </div>

          <h1 className="font-display text-6xl leading-[0.95] font-semibold tracking-tight sm:text-7xl lg:text-[5.5rem]">
            <span className="text-chrome block">{profile.nameLines[0]}</span>
            <span className="text-chrome-accent block">{profile.nameLines[1]}</span>
          </h1>

          <p className="font-display mt-5 text-xl text-on-surface-variant sm:text-2xl">
            {profile.role}
            <span className="animate-blink text-primary">_</span>
          </p>

          <p className="mt-6 max-w-xl text-pretty text-on-surface-variant">
            I design and ship products end to end — Vue and React interfaces on top of
            Node, PHP and Java services, deployed on infrastructure I run myself.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="/work" variant="solid">
              View the work
            </MagneticButton>
            <MagneticButton href="/#contact" variant="outline">
              Get in touch
            </MagneticButton>
          </div>
        </div>

        <RotatingBadge />
      </div>
    </section>
  );
}
