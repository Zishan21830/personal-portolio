/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      lightRed : "#f87171",
      gray : "#efefef",
      white : "#ffffff",
      black : "#000000",
    },
    fontFamily : {
      lato : ["Lato", "serif"],
      poppins : ["Poppins", "serif"],
      edensor: ['Edensor', 'sans-serif'],
      unbounded: ['Unbounded', 'sans-serif'],
    },
    theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  },
  plugins: [],
}