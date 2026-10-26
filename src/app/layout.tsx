import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import Script from "next/script";
import { SkipLink } from "@/components/layout/skip-link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LanguageProvider } from "@/i18n/language-context";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.mgarciap.workers.dev"),
  title: "Moisés García — Full-Stack Software Developer",
  description:
    "Full-stack software developer based in Barcelona, building across Vue, React and Node, with Dockerized infrastructure on Oracle Cloud and Cloudflare.",
  keywords: [
    "Moisés García",
    "Full-Stack Developer",
    "Barcelona",
    "Vue.js",
    "React",
    "Node.js",
    "Docker",
    "Software Developer Portfolio",
  ],
  authors: [{ name: "Moisés García" }],
  openGraph: {
    title: "Moisés García — Full-Stack Software Developer",
    description:
      "Full-stack software developer based in Barcelona, building across Vue, React and Node, with Dockerized infrastructure on Oracle Cloud and Cloudflare.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moisés García — Full-Stack Software Developer",
    description: "Full-stack software developer based in Barcelona.",
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
      <body className="bg-paper text-ink antialiased" suppressHydrationWarning>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME_SCRIPT }}
        />
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
