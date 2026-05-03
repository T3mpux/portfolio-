import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75"
        },
        mint: {
          50: "#f0fdf4",
          100: "#dcfce7",
          600: "#16a34a"
        },
        coral: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#f97316"
        },
        ink: "#0f172a"
      },
      boxShadow: {
        panel: "0 20px 55px rgba(15, 23, 42, 0.12)",
        soft: "0 12px 34px rgba(8, 145, 178, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
