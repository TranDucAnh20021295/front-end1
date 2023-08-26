/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        quickSilver: '#9F9F9F',
        cosmicLatte: '#FFF9E5',
        cultured: '#FAF4F4'
      }
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
