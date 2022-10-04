

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
      },
       screens: {

        'xs': '340px',
        // => @media (min-width: 640px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        }
    },
  },
  plugins: [],
}
