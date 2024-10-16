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
        "nav-bg": "#d5d5d5",
        ime: "#DCDC28",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        custom: ["Zilla Slab Highlight", "serif"],
      },
      fontSize: {
        textXxxs: "6px",
        textXxs: "8px",
        textXs: "12px",
        textMd: "14px",
        textLg: "16px",
        textXl: "18px",
        textXxl: "20px",
      },
      transitionDuration: {
        "400": "400ms",
        "2000": "2000ms",
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      screens: {
        xxxxsm: "360px",
        xxxsm: "390px",
        xxsm: "414px",
        xsm: "430px",
        xxxmd: "768px",
        xxmd: "820px",
        xmd: "1024px",
        phone: { max: "767px" },
        web: { min: "1025px" },
        air: "820px",
      },
      backgroundImage: {
        "grid-pattern": "url('/1.png')",
      },
    },
  },
  plugins: [],
};
export default config;
