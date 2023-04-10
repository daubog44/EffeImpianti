import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [...fontFamily.sans],
        beauty: ["var(--font-sans)", "var(--font-inter)"],
        roboto_mono: ["var(--font-roboto-mono)"],
        playfair_display: ["var(--font-playfair-display)"],
        Shantell_sans: ["var(--font-shantell-sans)"],
        Arima: ["var(--font-arima)"],
      },
      screens: {
        navBreak: "824px",
      },
      gridTemplateRows: {
        gridLayout: "repeat(2, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
