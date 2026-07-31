// Tailwind is wired through PostCSS rather than @astrojs/tailwind, because that
// integration peers out at Astro 5 and this project is on 7. Staying on Tailwind 3
// keeps the generated CSS byte-for-byte comparable; moving to Tailwind 4 is a
// separate, visual-risk change (CSS-first config, renamed utilities).
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
