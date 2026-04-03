import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        newspaper: {
          bg: "#FDFCF8",
          text: "#1A1A1A",
          muted: "#666666",
          border: "#E0E0E0",
          accent: "#CC0000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
