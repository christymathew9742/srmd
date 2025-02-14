import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',   // Tailwind default for small screens (sm)
        md: '768px',   // Medium screens (md) for tablets and smaller desktops
        lg: '1024px',  // Large screens (lg) for laptops and desktops
        xl: '1280px',  // Extra-large screens (xl) for large desktop views
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'baseTheme':'rgb(200 191 159)',
        'baseColor': '#c66a10',
        'baseLight' : 'rgb(252 150 51)',
      },
      fontSize: {
        'xxxs':'0.5rem', //8px
        'xxm':'0.625rem', //10px
        'xxs': '.6875rem', //11px
        'xs': '.75rem', // 12px
        'sm': '.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
      },
      fontFamily: {
        slick: 'slick',
        math: 'math',
      },
    },
  },
  plugins: [],
} satisfies Config;
