"use client";

import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { useLanguage } from "@/i18n/language-context";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CornerBrackets } from "@/components/ui/corner-brackets";

const POSITION_SPRING = { stiffness: 140, damping: 16, mass: 0.4 };
const FADE_SPRING = { stiffness: 200, damping: 24 };

function SignalPanel({ initials }: { initials: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const fade = useMotionValue(0);

  const x = useSpring(px, POSITION_SPRING);
  const y = useSpring(py, POSITION_SPRING);
  const opacity = useSpring(fade, FADE_SPRING);

  const spotlight = useMotionTemplate`radial-gradient(160px circle at ${x}% ${y}%, color-mix(in srgb, var(--primary) 35%, transparent) 0%, transparent 72%)`;

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set(((event.clientX - rect.left) / rect.width) * 100);
    py.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <div
      ref={ref}
      id="hero-signal-panel"
      onPointerMove={onPointerMove}
      onPointerEnter={() => fade.set(1)}
      onPointerLeave={() => fade.set(0)}
      className="bg-grid relative hidden size-56 shrink-0 overflow-hidden border border-outline-variant lg:block"
      style={{ backgroundSize: "20px 20px" }}
    >
      <CornerBrackets />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight, opacity }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary"
        style={{ left: useMotionTemplate`${x}%`, top: useMotionTemplate`${y}%`, opacity }}
      >
        <span className="absolute top-1/2 left-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-primary" />
        <span className="absolute top-1/2 left-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-primary" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-tag flex size-11 items-center justify-center border border-outline text-[10px] text-primary">
          {initials}
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const { content } = useLanguage();
  const { profile, hero } = content;

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
            <span className="text-chrome-accent -mt-1 ml-6 block sm:-mt-2 lg:ml-10">
              {profile.nameLines[1]}
            </span>
          </h1>

          <p className="font-display mt-5 text-xl text-on-surface-variant sm:text-2xl">
            {profile.role}
            <span className="animate-blink text-primary">_</span>
          </p>

          <p className="mt-6 max-w-xl text-pretty text-on-surface-variant">{hero.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="/work" variant="solid">
              {hero.ctaWork}
            </MagneticButton>
            <MagneticButton href="/#contact" variant="outline">
              {hero.ctaContact}
            </MagneticButton>
          </div>
        </div>

        <SignalPanel initials={profile.initials} />
      </div>
    </section>
  );
}
