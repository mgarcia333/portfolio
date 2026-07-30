import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Atmosphere } from "@/components/atmosphere/atmosphere";
import { CustomCursor } from "@/components/atmosphere/custom-cursor";
import { BootSequence } from "@/components/atmosphere/boot-sequence";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

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
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-surface text-on-surface antialiased" suppressHydrationWarning>
        <BootSequence />
        <Atmosphere />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
