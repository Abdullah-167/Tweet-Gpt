/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./atom/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#153648",
      secondary: "#738391",
      bgprimary: "#F1F7FA",
      borderprimary: "#E8EAED",
      white: "#fff",
      black: "#000",
    },
    extend: {},
  },
  plugins: [],
};
