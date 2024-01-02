/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        coffeecolor1: '#38220f',
        coffeecolor2 :'#DBC1AC',
        coffeecolor3 :'#967259'
      },
    },
  },
  plugins: [],
}

