/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'white': '#ffffff',
      'orange': {
        500: '#FC9F00',
        600: '#e7840a'
      },
      'black': '#000000',
      'grey': {
        500: '#e7e3e3',
        600: '#EFEFEF',
        700: '#27334026',
        800: '#F8F8F8',
      },
      'green': {
        500: '#41D77D',
        600: '#ECF6F0'
      },
      'red': {
        500: '#EE4C4C',
        600: '#ee4c4c17'
      }
    },
    textColor: {
      'black':  '#273340',
      'orange': '#FC9F00',
      'white': '#ffffff',
      'grey': '#A6ABB1',
      'green': '#41D77D',
      'red': '#EE4C4C'
    },
   
  },
  plugins: [],
};
