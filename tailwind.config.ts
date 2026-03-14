import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        en: ["Inter", "sans-serif"],
        th: ["THSarabunNew", "sans-serif"],
      },
    },
  },

  plugins: [],
} satisfies Config;