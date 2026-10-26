import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import Script from "next/script";
import { SkipLink } from "@/components/layout/skip-link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";
import { LanguageProvider } from "@/i18n/language-context";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { ThemeProvider } from "@/theme/theme-context";
import { DEFAULT_THEME, THEME_COLORS, THEME_STORAGE_KEY } from "@/theme/constants";
import "./globals.css";

const NO_FLASH_THEME_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme = stored === "dark" || stored === "light" ? stored : "${DEFAULT_THEME}";
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`;

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const { seo } = contentByLocale[DEFAULT_LOCALE];

// Pages set their own title, description and canonical (see lib/seo.ts); these
// are the site-wide defaults. The default language is Spanish, so is the metadata.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.title,
  description: seo.description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    title: seo.title,
    description: seo.description,
    siteName: SITE_NAME,
    type: "website",
    locale: "es_ES",
    alternateLocale: ["ca_ES", "en_US"],
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLORS[DEFAULT_THEME],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={archivo.variable}
    >
      <body className="flex min-h-svh flex-col bg-paper text-ink antialiased" suppressHydrationWarning>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME_SCRIPT }}
        />
        <JsonLd />
        <ThemeProvider>
          <LanguageProvider>
            <SkipLink />
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
