/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#23BE0A',
        secondary: '#63AB45',
        // ...
      }
    },
  },
  plugins: [require("daisyui")],
}

