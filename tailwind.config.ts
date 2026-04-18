import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#8B5CF6",
          50: "#F5F3FF",
          100: "#EDE9FE",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          900: "#4C1D95",
        },
        wa: {
          DEFAULT: "#25D366",
          50: "#EDFBF3",
          100: "#D4F5E0",
          500: "#25D366",
          600: "#1FB957",
          700: "#128C7E",
          900: "#075E54",
        },
        // Watercolor palette (Base44 inspired)
        aurora: {
          sky: "#C4DAF2",
          lavender: "#D4C4F0",
          mint: "#C4E8D0",
          peach: "#F0D0B4",
          blush: "#F0C4D8",
          butter: "#F4E4B8",
          lilac: "#E0C8F0",
          seafoam: "#B8E0DC",
          coral: "#F5C8B8",
          sage: "#D0E0C0",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          subtle: "#121212",
          muted: "#525252",
          faint: "#8A8A8A",
          whisper: "#B8B8B8",
        },
        canvas: {
          DEFAULT: "#F7F6F2",
          soft: "#F2F1EC",
          warm: "#FAF9F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-instrument)", "'Instrument Serif'", "Georgia", "serif"],
        mono: ["'SF Mono'", "Consolas", "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["88px", { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "500" }],
        giant: ["96px", { lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "500" }],
        h1: ["72px", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "500" }],
        h2: ["56px", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "500" }],
        h3: ["36px", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "500" }],
        body: ["17px", { lineHeight: "1.55", fontWeight: "400" }],
      },
      boxShadow: {
        mockup: "0 30px 80px rgba(139,92,246,0.15), 0 8px 24px rgba(0,0,0,0.06)",
        soft: "0 1px 2px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.04)",
        card: "0 1px 3px rgba(0,0,0,0.02), 0 10px 40px rgba(0,0,0,0.06)",
        pill: "0 2px 8px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(0,0,0,0.04)",
        float: "0 20px 60px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "drift": "drift 18s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(0, -10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 10px) scale(0.95)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.9" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
