/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#40CEEE',
        secondary: '#8EA2A5',
        dark: '#0f172a',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

