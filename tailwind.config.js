/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', 'serif'],
      },
      fontSize: {
        '48px': '48px',
        '24px':'24px',
      },
      lineHeight: {
        '59px': '59.52px',
      },
      colors: {
        'custom-gray': '#595959',
        'dark-gray': '#272727',
      },
    },
  },
  plugins: [],
}


