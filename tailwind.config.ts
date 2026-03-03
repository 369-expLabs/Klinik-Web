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
        cream: {
          DEFAULT: "#FDFBF7",
          dark: "#F0EBE0",
        },
        sage: {
          light: "#B5BDA8",
          DEFAULT: "#87917F",
          dark: "#5C6455",
        },
        charcoal: {
          soft: "#474B4C",
          DEFAULT: "#2F3132",
        },
        gold: {
          light: "#E8D08A",
          DEFAULT: "#C9A84C",
        },
        taupe: {
          light: "#C4B8AC",
          DEFAULT: "#857A6F",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
