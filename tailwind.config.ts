import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: "class", 
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "768px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "max-lg": { max: "1023px" },
      },
      fontFamily: {
        bodyFont: ["Fira Code", "monospace"],
        titleFont: ["Encode Sans Expanded", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
        light: "0px 4px 10px rgba(255, 255, 255, 0.5)",
        dark: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: {
          DEFAULT: "#FFFF", // Light mode default
          dark: "#121212", // Dark mode version
        },
        textGreen: {
          DEFAULT: "#001F3F",
          dark: "#00FFFF",
        },
        textLight: {
          DEFAULT: "#374151",
          dark: "#CCD6F6",
        },
        textDark: {
          DEFAULT: "#003366",
          dark: "#8892B0",
        },
        hoverColor: {
          dark: "rgba(100,255,218,0.1)",
        },
        textUnderline: {
          DEFAULT: "#001F3F",
          dark: "#00FFFF",
        },
      },
    },
  },
  plugins: [],
}
export default config
