import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores dark personalizados
        dark: {
          1: '#4b0d63',
          2: '#59057a',
          3: '#652f7a',
        },
        // Colores light personalizados
        light: {
          1: '#c570e6',
          2: '#f2d0ff',
          3: '#dd87ff',
        }
      },
      fontFamily: {
        'cormorant': ['var(--font-cormorant-garamond)', 'serif'],
        'lexend': ['var(--font-lexend-deca)', 'sans-serif'],
        'ballet': ['var(--font-ballet)', 'cursive'],
      },
    },
  },
};

export default config;