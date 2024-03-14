/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
      screens: {
        mob: "375px",
        mobFirst: {"min": "376px", "max": "639px"},
        tablet: {"min": "769", "max": "1023"},
        screen: {"min": "1025", "max": "1279"}, 
      },
      colors: {
        "blueBase": "#04ADBF", 
        "bluePrimary": "#04BFBF",
        "secondary":"#027373",
        "green": "#7EA629",
        "complementary": "#F2E3D5",
      },
    },
  },
  plugins: [],
}

