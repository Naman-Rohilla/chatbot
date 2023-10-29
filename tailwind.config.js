/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-slow': 'spin 240s linear infinite',
      }
    },
    fontFamily: {
      'styleFont': ['Style Script'],
      // 'styleSerif': ['Dancing Script', 'Style Script', 'Young Serif'],
    }
  },
  plugins: [],
}

