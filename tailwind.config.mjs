/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 1s ease-in-out',
      },

      keyframes: (theme) => ({
        fadeIn: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.red.300') },
        },
      }),
    },
  },
  plugins: [],
};
