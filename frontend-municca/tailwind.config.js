/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "municca-gray": "#F1F5F9",
        "municca-blue": "#1169B0",
        "municca-blue-nav": "#1169B0",
        "municca-divisor": "#DDDDDD",
      },
    },
  },
  plugins: [],
};