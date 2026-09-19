import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { Fredoka } from "next/font/google";
import { Creepster } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { FilmGrainOverlay } from "@/components/ui/FilmGrainOverlay";
import { BackgroundSkullField } from "@/components/ui/BackgroundSkullField";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Fredoka: redondeada, gruesa y juguetona — reservada solo para los botones.
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Creepster: la típica tipografía "de terror de caricatura" — reservada solo
// para titulares grandes (logo, hero), nunca para texto chico o de lectura.
const creepster = Creepster({
  variable: "--font-creepster",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://luvysarchive.vercel.app'),
  title: {
    default: "LuvysArchive — Fotografía de muñecas Monster High",
    template: "%s · LuvysArchive",
  },
  description:
    "Portafolio de fotografía de muñecas Monster High de @luvy.dolls: escenarios, iluminación cinematográfica y una comunidad para compartir tus propias creaciones.",
  openGraph: {
    title: "LuvysArchive — Fotografía de muñecas Monster High",
    description:
      "Escenarios, iluminación cinematográfica y una comunidad para compartir tus creaciones Monster High.",
    siteName: "LuvysArchive",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuvysArchive — Fotografía de muñecas Monster High",
    description:
      "Escenarios, iluminación cinematográfica y una comunidad para compartir tus creaciones Monster High.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${spaceGrotesk.variable} ${fredoka.variable} ${creepster.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-ink)] text-[var(--color-text)]">
        <BackgroundSkullField />
        {children}
        <FilmGrainOverlay />
        <Analytics />
      </body>
    </html>
  );
}
