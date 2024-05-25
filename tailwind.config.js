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
        700: '#27334026'
      }
    },
    textColor: {
      'black':  '#273340',
      'orange': '#FC9F00',
      'white': '#ffffff'
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.7rem',
      '7xl': '4rem',
    },
  },
  plugins: [],
};
