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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
