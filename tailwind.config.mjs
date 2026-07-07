/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#111111',
          blue: '#cc33cc',
          light: '#dd55dd',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
