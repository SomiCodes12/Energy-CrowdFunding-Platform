/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        small: {max: "768px"},
        meduim: {max: "320px"},
        large: {max: "1440px"},
      }
    },
  },
  plugins: [],
}

