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
  
        'laptop': '1440px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '2560px',
        // => @media (min-width: 1280px) { ... }
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: {
            left: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        }
      }    
    },
  },
  plugins: [],
}
