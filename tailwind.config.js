/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.jsx",
    "./src/components/NavBar.jsx"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px', 
      }
    },
  },
  plugins: [],
}

