/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 1s ease-in-out',
        slide: 'slideIn 1s ease-in-out',
      },

      keyframes: (theme) => ({
        fadeIn: {
          //   '0%': { color: theme('colors.transparent') },
          //   '100%': { color: theme('colors.white') },
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(60px)', opacity: 0 },
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
