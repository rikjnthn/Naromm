import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#F4F6EA",
        primary: {
          base: "#1A5319",
          light: "#187a16",
          dark: "#0c520b",
        },
        secondary: {
          base: "#508D4E",
          light: "#5ca65a",
          dark: "#396637",
        },
      },
      fontSize: {
        "3xl": "2rem",
      },
      screens: {
        xs: "410px",
      },
      spacing: {
        "76": "18.75rem",
        "97": "25rem",
        "99": "28.125rem",
        "100": "28rem",
        "103": "31.25rem",
        "110": "40rem",
        "120": "50rem",
      },
      opacity: {
        "1": "0.01",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
