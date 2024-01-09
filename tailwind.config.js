/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors : {
        blue : '#1E2640',
        grey : '#F2F2F2',
        textblue : '#146EB4'
      },
    }
  },
  plugins: [],
};
