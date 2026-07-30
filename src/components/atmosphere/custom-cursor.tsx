"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = isFinePointer && !reduceMotion;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.4 });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const previousCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    function handleMove(event: PointerEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      setHovering(Boolean((event.target as HTMLElement).closest?.("a, button, [data-cursor-hover]")));
    }

    function handleLeave() {
      setVisible(false);
    }

    window.addEventListener("pointermove", handleMove);
    document.documentElement.addEventListener("pointerleave", handleLeave);

    return () => {
      document.body.style.cursor = previousCursor;
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x, y, translate: "-50% -50%", opacity: visible ? 1 : 0 }}
        className="pointer-events-none fixed top-0 left-0 z-[100] size-1.5 rounded-full bg-primary transition-opacity duration-300"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY, translate: "-50% -50%", opacity: visible ? 1 : 0 }}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[100] rounded-full border border-primary/70 transition-[width,height,background-color,opacity] duration-300 ease-out",
          hovering ? "size-14 bg-primary/10" : "size-7 bg-transparent"
        )}
      />
    </>
  );
}
