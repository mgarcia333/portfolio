import { TechChip } from "@/components/ui/tech-chip";
import type { StackCategory } from "@/i18n";

type Category = StackCategory & { description?: string };

/** Every category laid out flat, so nothing hides behind a horizontal scroll. */
export function StackList({ categories }: { categories: Category[] }) {
  return (
    <dl className="border-t-2 border-ink">
      {categories.map((category) => (
        <div
          key={category.id}
          className="grid gap-4 border-b-2 border-ink py-7 md:grid-cols-[15rem_1fr] md:gap-10"
        >
          <dt className="display text-4xl">{category.label}</dt>
          <dd>
            {category.description ? (
              <p className="mb-5 max-w-2xl text-pretty text-ink-soft">{category.description}</p>
            ) : null}
            <ul className="flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <li key={item.name}>
                  <TechChip icon={item.icon} label={item.name} className="px-3 py-1.5 text-base" />
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
