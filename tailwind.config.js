module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'footer': '#0d0594',
        'primary': '#1f12fd',
      },
      width:{
        97: '28rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
