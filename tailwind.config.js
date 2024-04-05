/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.js",
    "./src/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'phone': '320px',

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'mid': '1024px',
  
        'laptop': '1440px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '2560px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
