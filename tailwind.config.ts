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
          DEFAULT: "#F9F7F2", // Updated to Jungian cream
          dark: "#EAEADF",
        },
        sage: {
          light: "#B5BDA8",
          DEFAULT: "#87917F",
          dark: "#5C6455",
        },
        charcoal: {
          soft: "#474B4C",
          DEFAULT: "#333333", // Updated charcoal
        },
        forest: {
          DEFAULT: "#214326", // New primary CTA
          light: "#2A5631",
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
        outfit: ["Outfit", "sans-serif"],
        inter: ["Outfit", "sans-serif"], // aliased to Outfit — backward compat
      },
      boxShadow: {
        'glow': '0 0 20px rgba(33, 67, 38, 0.4)',
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
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0px 0px rgba(33, 67, 38, 0)" },
          "50%": { boxShadow: "0 0 25px 8px rgba(33, 67, 38, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
