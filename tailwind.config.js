/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.jsx",
    "./src/components/NavBar.jsx",
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px",
      },
      fontSize: {
        cs: [
          "1.850rem",
          {
            letterSpacing: "-0.0275em",
            lineHeight: "2rem",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
};
