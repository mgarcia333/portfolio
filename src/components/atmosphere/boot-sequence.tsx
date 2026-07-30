"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const LINES = [
  "PORTFOLIO_OS v2.6 — BOOT SEQUENCE",
  "MOUNTING INTERFACE... OK",
  "LOADING PROFILE: M.GARCIA_POVEDA... OK",
  "STATUS: READY",
];

type Phase = "boot" | "collapse" | "done";

export function BootSequence() {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [skip, setSkip] = useState(true);
  const [phase, setPhase] = useState<Phase>("boot");
  const [lineIndex, setLineIndex] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const alreadyShown = sessionStorage.getItem("boot-sequence-shown");
    if (alreadyShown || reduceMotion) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("boot-sequence-shown", "1");
    setSkip(false);
  }, [reduceMotion]);

  useEffect(() => {
    if (skip || phase !== "boot") return;
    if (lineIndex >= LINES.length) {
      const t = setTimeout(() => setPhase("collapse"), 260);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 210);
    return () => clearTimeout(t);
  }, [lineIndex, phase, skip]);

  useEffect(() => {
    if (phase !== "collapse") return;
    const t = setTimeout(() => setPhase("done"), 500);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (skip || phase !== "boot") return;
    function skipBoot() {
      setPhase("collapse");
    }
    window.addEventListener("pointerdown", skipBoot);
    window.addEventListener("keydown", skipBoot);
    return () => {
      window.removeEventListener("pointerdown", skipBoot);
      window.removeEventListener("keydown", skipBoot);
    };
  }, [skip, phase]);

  if (skip || phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-surface font-mono"
      initial={{ opacity: 1 }}
      animate={phase === "collapse" ? { scaleY: 0.002, opacity: 0.3 } : { opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.7, 0, 0.84, 0] }}
    >
      <div className="w-full max-w-md px-6">
        {LINES.slice(0, lineIndex).map((line, i) => (
          <p key={line} className="text-tag py-0.5 text-xs text-primary sm:text-sm">
            <span className="text-on-surface-muted">{">"}</span> {line}
            {i === lineIndex - 1 && <span className="animate-blink">_</span>}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
