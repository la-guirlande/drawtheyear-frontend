module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'quicksand-book': ['Quicksand-Book'],
        'extreme': ['Extreme']
      },
      colors: {
        primary: {
          light: '#D5f7e6',
          DEFAULT: '#B5FFD9',
          dark: '#40ad77'
        },
        secondary: {
          light: '#D272fd',
          DEFAULT: '#AE00FB',
          dark: '#8004b7'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
