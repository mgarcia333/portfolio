import { TechChip } from "@/components/ui/tech-chip";
import type { StackCategory } from "@/i18n";

type Category = StackCategory & { description?: string };

/** Every category laid out flat, so nothing hides behind a horizontal scroll. */
export function StackList({ categories }: { categories: Category[] }) {
  return (
    <dl className="border-b border-line">
      {categories.map((category) => (
        <div
          key={category.id}
          className="grid gap-3 border-t border-line py-6 md:grid-cols-[10rem_1fr] md:gap-8"
        >
          <dt className="font-semibold">{category.label}</dt>
          <dd>
            {category.description ? (
              <p className="mb-4 max-w-2xl text-pretty text-fg-soft">{category.description}</p>
            ) : null}
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item.name}>
                  <TechChip icon={item.icon} label={item.name} className="px-3 py-1.5" />
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
