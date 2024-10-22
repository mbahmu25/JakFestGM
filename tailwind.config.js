/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        main: "#21434e",
        grad: "#c8f52f",
        whitepop: "#FAFAFA",
        bg2: "#F5F5F5",
        accent: "#146E6C",
      },
    },
  },
  plugins: [],
};
