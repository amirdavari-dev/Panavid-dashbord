/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        mxs: "380px",
      },
    },
    fontFamily:{
      "sans-Fo":"sans"
    }
  },
  plugins: [],
};
