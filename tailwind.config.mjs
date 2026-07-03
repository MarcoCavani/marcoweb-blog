/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1a2744',
          blue: '#1e73be',
          light: '#4a9edd',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
