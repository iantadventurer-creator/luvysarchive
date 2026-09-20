import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { FilmGrainOverlay } from "@/components/ui/FilmGrainOverlay";
import { BackgroundSunset } from "@/components/ui/BackgroundSunset";

// Quicksand: redondeada y suave — texto de lectura y botones.
const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Playfair Display: serif elegante y romántica — títulos grandes.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Dancing Script: cursiva caprichosa — reservada para el logo y algún
// detalle chico, nunca para texto de lectura (a tamaños chicos se vuelve
// difícil de leer).
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://luvysarchive.vercel.app'),
  title: {
    default: "LuvysArchive — Fotografía de muñecas",
    template: "%s · LuvysArchive",
  },
  description:
    "Diario de fotografía de muñecas de @luvy.dolls: escenarios de ensueño, luz de atardecer y una comunidad para compartir tus propias creaciones.",
  openGraph: {
    title: "LuvysArchive — Fotografía de muñecas",
    description:
      "Escenarios de ensueño, luz de atardecer y una comunidad para compartir tus creaciones.",
    siteName: "LuvysArchive",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuvysArchive — Fotografía de muñecas",
    description:
      "Escenarios de ensueño, luz de atardecer y una comunidad para compartir tus creaciones.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f2b8d6",
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
      className={`${quicksand.variable} ${playfair.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-ink)] text-[var(--color-text)]">
        <BackgroundSunset />
        {children}
        <FilmGrainOverlay />
        <Analytics />
      </body>
    </html>
  );
}
