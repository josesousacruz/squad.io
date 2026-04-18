import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "aiCoWork | Seu agente pessoal de IA no WhatsApp",
  description:
    "Resolva qualquer coisa pelo WhatsApp com agentes de IA. Faca reservas, pesquise, compre e automatize sua rotina apenas conversando.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
