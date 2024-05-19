/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.handlebars"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed", "sans-serif"],
        caveat: ["Caveat", "cursive"],
        amatic: ["Amatic SC", "sans-serif"],
      },
    },
  },
  plugins: [],
}

