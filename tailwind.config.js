/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'earth': {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#654321',
        },
        'soil': {
          DEFAULT: '#5C4033',
          light: '#6B4423',
          dark: '#3B2B21',
        },
        'leaf': {
          DEFAULT: '#4CAF50',
          light: '#66BB6A',
          dark: '#388E3C',
        },
        'sand': {
          DEFAULT: '#F4E4BC',
          light: '#F9EFD6',
          dark: '#E8D5A7',
        },
      },
      fontFamily: {
        sans: ['Assistant', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}