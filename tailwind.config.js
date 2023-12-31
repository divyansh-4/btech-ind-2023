/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#E44F44",
        yellow: "#FAC018",
        background: "#252525",
        blue5: "#277FE6",
        purple9: "#4D2885",
      },
    },
  },
  plugins: [],
};
