/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#111111',
          blue: '#3399cc',
          light: '#55b8e0',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
