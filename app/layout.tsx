import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import "./design-system.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VenturLab — Laboratorio Digital",
    template: "%s | VenturLab",
  },
  description:
    "El puente entre tu idea y una realidad digital impecable. Branding, diseño web y estrategia digital para marcas valientes.",
  keywords: [
    "agencia diseño digital",
    "consultoría UX/UI",
    "diseño web estratégico",
    "soluciones digitales pymes",
    "branding emprendedores",
    "transformación digital",
    "identidad de marca",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "VenturLab",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
