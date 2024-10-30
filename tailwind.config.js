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
        grad1: "#c8f52f",
        grad: "#06726c",
        whitepop: "#FAFAFA",
        bg2: "#F5F5F5",
        accent: "#146E6C",
      },
    },
  },
  plugins: [],
};
