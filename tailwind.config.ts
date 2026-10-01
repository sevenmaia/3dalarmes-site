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
        navy: {
          950: "#020B18",
          900: "#04152D",
          850: "#061D3D",
          800: "#08264C",
          700: "#0B3366",
        },
        blue: {
          700: "#064DBA",
          600: "#0765D8",
          500: "#0A72ED",
          400: "#2B87F4",
          100: "#E6F0FC",
          50: "#F0F6FD",
        },
        yellow: {
          500: "#FFD600",
          400: "#FFE226",
          300: "#FFEA55",
        },
        gray: {
          50: "#F7F9FC",
          100: "#EFF3F8",
          200: "#E4E9F0",
          400: "#A5AFBF",
          600: "#596579",
          800: "#202A39",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1320px",
        wide: "1440px",
      },
      boxShadow: {
        card: "0 12px 36px -8px rgba(2, 11, 24, 0.07), 0 2px 8px rgba(2, 11, 24, 0.04)",
        "dark-card": "0 16px 40px -10px rgba(0, 0, 0, 0.35)",
        "yellow-glow": "0 8px 24px -4px rgba(255, 214, 0, 0.40)",
        "blue-glow": "0 8px 24px -4px rgba(7, 101, 216, 0.35)",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};
export default config;
