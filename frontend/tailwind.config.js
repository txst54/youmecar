/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'youmeblue': '#C2D4EA',
      }
    },
    fontFamily: {
      'sans': ['Avenir', 'Figtree', 'ui-sans-serif']
    }
  },
  plugins: [],
}


