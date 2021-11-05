module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      //prettier-ignore
      'background': '#222',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
