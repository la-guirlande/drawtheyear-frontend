module.exports = {
  purge: {
    enabled: false,
    content: [
      './src/**/*.tsx'
    ]
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Drawing Guides"'],
        secondary: ['"Magic Mushroom"'],
        nunito: ['Nunito'],
        quicksand: ['Quicksand']
      },
      colors: {
        primary: {
          light: '#f88c36',
          DEFAULT: '#f88020',
          dark: '#df731c'
        },
        secondary: {
          light: '#d53c5d',
          DEFAULT: '#d1274b',
          dark: '#bc2343'
        },
        light: '#fff4e4',
        dark: '#3d0e1e',
        'dark-gradient': 'radial-gradient(circle, rgba(61,14,30,1) 0%, rgba(25,8,10,1) 100%)'
      },
      width: {
        '1/2-screen': '50vw',
        '1/4-screen': '25vw',
      },
      height: {
        '1/2-screen': '50vh',
        '1/4-screen': '25vh',
      },
      boxShadow: {
        big: '25px 0 50px -12px rgba(0, 0, 0, 0.75);'
      },
      textShadow: {
        cell: '-1px 0 1px rgb(50, 50, 50), 0 1px 1px rgb(50, 50, 50), 1px 0 1px rgb(50, 50, 50), 0 -1px 1px rgb(50, 50, 50)'
      },
    }
  },
  variants: {
    extend: {
      zIndex: ['hover']
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwindcss-line-clamp')
  ],
}
