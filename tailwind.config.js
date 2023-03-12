/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainBlue: '#0f172a',
        mainCard: '#1e293b',
        header: '#262D4F',
        mainPurple: "#550dba",
        darkBlue: "#1b2940",
        lightBLue: "rgb(157, 201, 250)"
      },
      colors: {
        primaryOpacity: '#939AB0',
        lightBlue: '#38bdf8',
        mainText: "#9ca6b4",
        mainPurple: "#030ea5"
      },
      borderColor: {
        mainWhite: "#e5e7eb"
      }
    },
  },
  plugins: [],
}
