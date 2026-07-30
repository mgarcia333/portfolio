"use client";

import { useRef, useState, type PointerEvent } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { TechChip } from "@/components/ui/tech-chip";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useLanguage } from "@/i18n/language-context";

const DRAG_THRESHOLD = 4;

export function Stack() {
  const { content } = useLanguage();
  const { stack } = content;

  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { down: true, startX: event.clientX, startScrollLeft: el.scrollLeft };
    el.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = scrollRef.current;
    if (!el || !drag.current.down) return;
    const delta = event.clientX - drag.current.startX;
    if (!isDragging && Math.abs(delta) > DRAG_THRESHOLD) setIsDragging(true);
    el.scrollLeft = drag.current.startScrollLeft - delta;
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const el = scrollRef.current;
    if (el?.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId);
    drag.current.down = false;
    setIsDragging(false);
  }

  return (
    <section id="stack" className="scroll-mt-24 border-t border-outline-variant py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker={stack.kicker} title={stack.title} description={stack.description} />

        <div
          ref={scrollRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          className="flex cursor-grab gap-4 overflow-x-auto overscroll-x-contain pb-4 select-none active:cursor-grabbing"
        >
          {stack.categories.map((category) => (
            <TiltCard
              key={category.id}
              className="w-64 shrink-0 sm:w-72"
              max={4}
              disabled={isDragging}
            >
              <CornerBrackets />
              <div className="flex h-full min-h-44 flex-col p-6">
                <p className="text-tag mb-5 text-xs text-primary">{category.label}</p>
                <div className="flex flex-1 flex-wrap content-start gap-2">
                  {category.items.map((item) => (
                    <TechChip key={item.name} icon={item.icon} label={item.name} />
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <MagneticButton href="/stack" variant="outline">
            {stack.viewMore}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
