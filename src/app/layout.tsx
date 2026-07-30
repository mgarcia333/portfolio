import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Atmosphere } from "@/components/atmosphere/atmosphere";
import { CustomCursor } from "@/components/atmosphere/custom-cursor";
import { BootSequence } from "@/components/atmosphere/boot-sequence";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LanguageProvider } from "@/i18n/language-context";
import { ThemeProvider } from "@/theme/theme-context";
import { THEME_STORAGE_KEY } from "@/theme/constants";
import "./globals.css";

const NO_FLASH_THEME_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme = stored === "dark" || stored === "light"
      ? stored
      : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`;

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.mgarciap.workers.dev"),
  title: "Moisés García Poveda — Full-Stack Software Developer",
  description:
    "Full-stack software developer based in Barcelona, building across Vue, React and Node, with Dockerized infrastructure on Oracle Cloud and Cloudflare.",
  keywords: [
    "Moisés García Poveda",
    "Full-Stack Developer",
    "Barcelona",
    "Vue.js",
    "React",
    "Node.js",
    "Docker",
    "Software Developer Portfolio",
  ],
  authors: [{ name: "Moisés García Poveda" }],
  openGraph: {
    title: "Moisés García Poveda — Full-Stack Software Developer",
    description:
      "Full-stack software developer based in Barcelona, building across Vue, React and Node, with Dockerized infrastructure on Oracle Cloud and Cloudflare.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moisés García Poveda — Full-Stack Software Developer",
    description: "Full-stack software developer based in Barcelona.",
  },
};

export const viewport: Viewport = {
  themeColor: "#12131a",
  colorScheme: "dark",
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-surface text-on-surface antialiased" suppressHydrationWarning>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME_SCRIPT }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <BootSequence />
            <Atmosphere />
            <CustomCursor />
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
