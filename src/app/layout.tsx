import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mercado de Origem — Centro Cultural Gastronômico",
  description:
    "Venha viver uma experiência única de gastronomia artesanal, cultura e lazer no coração de Minas Gerais. Produtos locais, eventos exclusivos e espaços para toda a família.",
  keywords: ["mercado artesanal", "gastronomia", "Minas Gerais", "eventos", "feira orgânica"],
  openGraph: {
    title: "Mercado de Origem",
    description: "Centro Cultural Gastronômico em Minas Gerais",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
