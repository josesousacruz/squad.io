import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Squad.io by CruzTech | Super Agentes de IA no WhatsApp",
  description:
    "Super agentes de IA executam bugs, features, deploys e automações direto no WhatsApp. Cada entrega é validada por engenheiros sêniores da CruzTech.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${instrument.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
