/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif']
      },
      colors: {
        lightRed: 'hsl(356, 100%, 66%)',
        veryLightRedHover: 'hsl(355, 100%, 74%)',
        veryDarkBlue: 'hsl(208, 49%, 24%)',
        greyishBlue: 'hsl(240, 2%, 79%)',
        veryGrayishBlue: 'hsl(207, 13%, 34%)',
        veryDarkBlackBlue: 'hsl(240, 10%, 16%)',
        veryLightRed: 'hsl(13, 100%, 72%)',
        veryDarkgrayBlue: 'hsl(237, 17%, 21%)',
        veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)'
      }
    },
  },
  plugins: [],
}