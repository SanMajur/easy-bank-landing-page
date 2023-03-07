/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkBlue': 'hsl(233, 26%, 24%)',
        'lightGreen': 'hsl(136, 65%, 51%)',
        'lightCyan': 'hsl(192, 70%, 51%)',
        'grayishBlue': 'hsl(233, 8%, 62%)',
        'lightGrayishBlue': 'hsl(220, 16%, 96%)',
        'lightGray': 'hsl(0, 0%, 98%)',
        'lightWhite': 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
