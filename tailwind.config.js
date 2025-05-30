/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 10s infinite',
        marquee: 'marquee 30s linear infinite'
      },
      keyframes: {
        pulse: {
          '0%': {transform: 'scale(1)'},
          '33%': {transform: 'scale(1.2)'},
          '66%': {transform: 'scale(0.8)'},
          '100%': {transform: 'scale(1)'},
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'skill-grad': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
    },
  },
  plugins: [],
}
