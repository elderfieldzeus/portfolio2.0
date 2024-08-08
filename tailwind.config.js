/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#E0E0E0",
        tertiary: "#2C2C2C"
      },
      fontFamily: {
        kiwi_light: ['KiwiMaru-Light', 'sans-serif'],
        kiwi_medium: ['KiwiMaru-Medium', 'sans-serif'],
        kiwi_regular: ['KiwiMaru-Regular', 'sans-serif'],
        ignotum: ['Ignotum', 'sans-serif']
      },
      // keyframes: {
        
      // },
      // animation: {
        
      // }
    }
  },
  plugins: [],
}