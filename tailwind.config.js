/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.jsx",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

