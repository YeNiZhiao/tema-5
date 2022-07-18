module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#334257',
        'secondary': '#476072',
        'komponen': '#548CA8',
        'textPrimary': '#EEEEEE'
      },
      backgroundImage: {
        'elemen': "url('/img/elemen.png')",
        'bgsection': "url('../img/bgsection.jpg')",
      },
      fontFamily: {
        'edu': ['Edu NSW ACT Foundation', 'cursive'],
        'coveat': ['Caveat', 'cursive'],
        'titanium': ['Titillium Web', 'sans-serif']
      }
    },

  },
  plugins: [],
}