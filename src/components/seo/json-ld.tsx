import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";
import { profileShared, stackItemsByCategory } from "@/i18n/shared";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

/** Structured data describing the site and the person behind it (schema.org). */
export function JsonLd() {
  const { profile, experience } = contentByLocale[DEFAULT_LOCALE];
  const current = experience.entries.find((entry) => entry.current);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: ["es", "ca", "en"],
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: SITE_URL,
        jobTitle: profile.role,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Barcelona",
          addressCountry: "ES",
        },
        ...(current ? { worksFor: { "@type": "Organization", name: current.org } } : {}),
        sameAs: [profileShared.github, profileShared.linkedin],
        knowsAbout: Object.values(stackItemsByCategory)
          .flat()
          .map((item) => item.name),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
