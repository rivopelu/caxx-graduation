/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#c0aaa6",
          2: "#ECE6FF",
          dark: "#996a57",
        },
        background: "#DBCAC7",
      },
    },
  },
  plugins: [],
};
