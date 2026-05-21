import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0e12",
        "surface-card": "rgba(255,255,255,0.02)",
        "border-card": "rgba(255,255,255,0.11)",
        primary: "#f5f5f0",
        "primary-hover": "#e5e5dc",
        violet: "#d97706", // warm amber for accent
        brand: {
          cream: "#f5f5f0",
          sand: "#e5e5dc",
          gold: "#d97706",
          emerald: "#10b981",
          obsidian: "#0d0e12",
          darkcard: "#171922",
        },
        "text-primary": "#f1f5f9",
        "text-secondary": "#94a3b8",
        "text-muted": "#475569",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #f5f5f0 0%, #e5e5dc 100%)",
        "gradient-radial-glow":
          "radial-gradient(ellipse at center, rgba(245,245,240,0.05) 0%, transparent 70%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow-pulse": "glowPulse 4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(245,245,240,0.05)" },
          "50%": { boxShadow: "0 0 25px rgba(245,245,240,0.12)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
