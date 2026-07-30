"use client";

import { useRef, type PointerEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";

const SPRING = { stiffness: 180, damping: 14, mass: 0.35 };

export function useMagnetic<T extends HTMLElement>(strength = 0.35, disabled = false) {
  const ref = useRef<T>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  function onPointerMove(event: PointerEvent<T>) {
    if (disabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function onPointerLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, x: springX, y: springY, onPointerMove, onPointerLeave };
}
