/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        coffeeDark: "#611707",
        coffeeLight: "#F2E8D9",
        coffeePrimaryLight: "#E5D8D8"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}
