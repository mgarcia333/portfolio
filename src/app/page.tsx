import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Stack } from "@/components/sections/stack";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

const { seo } = contentByLocale[DEFAULT_LOCALE];

export const metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  path: "/",
});

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Work />
      <About />
      <Stack />
      <Experience />
      <Contact />
    </main>
  );
}
