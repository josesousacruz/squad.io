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
        ink: {
          DEFAULT: "#0A0A0A",
          subtle: "#121212",
          muted: "#525252",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["'SF Mono'", "Consolas", "ui-monospace", "monospace"],
      },
      fontSize: {
        giant: ["96px", { lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "600" }],
        h1: ["72px", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "500" }],
        h2: ["48px", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "500" }],
        h3: ["36px", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "500" }],
        body: ["17px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      boxShadow: {
        "mockup": "0 30px 80px rgba(139,92,246,0.25)",
        "soft": "0 1px 2px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.04)",
      },
      backgroundImage: {
        "blob-purple": "radial-gradient(ellipse at 50% 30%, rgba(167,139,250,0.35) 0%, rgba(139,92,246,0.18) 30%, rgba(255,255,255,0) 60%)",
        "blob-indigo": "radial-gradient(ellipse at 70% 40%, rgba(99,102,241,0.20) 0%, rgba(79,70,229,0.08) 40%, rgba(255,255,255,0) 70%)",
        "blob-section": "radial-gradient(ellipse at 50% 50%, rgba(167,139,250,0.18) 0%, rgba(139,92,246,0.08) 40%, rgba(255,255,255,0) 75%)",
      },
    },
  },
  plugins: [],
};

export default config;
