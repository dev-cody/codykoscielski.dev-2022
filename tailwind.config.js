/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'dark': '#264653',
      'blue': '#2A9D8F',
      'yellow': '#E9C46A',
      'orange': '#F4A261',
      'red': '#E76F51',
    },
    fontSize: {
      'xs': '16px',
      'sm': '20px',
      'md': '24px',
      'lg': '50px',
      'xl': '55px'
    },
    extend: {},
  },
  plugins: [],
}
