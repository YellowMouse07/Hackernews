/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ff6600",
        "coffee-l": "#f6f6ef",
        "coffee-xl": "#efefef",
        "grey-n": "#828282",
        "grey-d": "#222222",
        "purple-n": "#551a8b",
        "green-n":"#3c963c"
      },
      fontFamily: {
        verdana: ["Verdana", "Geneva", "sans-serif"],
      },
    },
  },
  plugins: [],
};
