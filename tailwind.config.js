module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          '50': '#99BF18'
        },
        violet: {
          '50': '#f7faff'
        }
      },
      animation: {
        'bounce-slow': 'bounce 12s linear infinite',
      },
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '20px 30px 8px rgba(235, 235, 235, 0.4)',
        '4xl': '20px 30px 8px rgba(235, 235, 235, 0.4)'
      },
      margin: {
        xl: '447px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
