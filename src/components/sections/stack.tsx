import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { TechChip } from "@/components/ui/tech-chip";
import { stackCategories } from "@/data/content";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 border-t border-outline-variant py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="02 — STACK"
          title="Loadout"
          description="Technologies I reach for, sorted by layer — from interface down to the infrastructure it runs on."
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:auto-rows-[minmax(180px,auto)]">
          {stackCategories.map((category) => (
            <TiltCard key={category.id} className={category.span} max={4}>
              <CornerBrackets />
              <div className="flex h-full flex-col p-6">
                <p className="text-tag mb-5 text-xs text-primary">{category.label}</p>
                <div className="flex flex-1 flex-wrap content-center gap-2">
                  {category.items.map((item) => (
                    <TechChip key={item.name} icon={item.icon} label={item.name} />
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
