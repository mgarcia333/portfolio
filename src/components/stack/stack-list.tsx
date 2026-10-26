import type { StackCategory } from "@/i18n";

type Category = StackCategory & { description?: string };

/** A typographic index: category on the left, the tools set as a line of type. */
export function StackList({ categories }: { categories: Category[] }) {
  return (
    <dl className="border-t border-ink">
      {categories.map((category) => (
        <div
          key={category.id}
          className="grid gap-2 border-b border-line py-6 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8"
        >
          <dt className="pt-1.5 text-sm font-medium text-ink-muted">{category.label}</dt>
          <dd>
            {category.description ? (
              <p className="mb-3 max-w-2xl text-pretty text-ink-soft">{category.description}</p>
            ) : null}
            <ul className="flex flex-wrap text-xl font-semibold tracking-tight sm:text-2xl">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="after:mx-3 after:font-normal after:text-ink-muted after:content-['/'] last:after:hidden"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
