


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This scans all JS/TS files in the src folder
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        flyToCart: {
          '0%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'translate(50vw, -50vh) scale(0.5)',
            opacity: '0.7',
          },
          '100%': {
            transform: 'translate(100vw, -100vh) scale(0)',
            opacity: '0',
          },
        },
      },
      animation: {
        flyToCart: 'flyToCart 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
