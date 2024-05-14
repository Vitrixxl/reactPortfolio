/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extends: {
      transitionProperty: {
        'background': 'background',

      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      dark: colors.dark,
      red: colors.red,

      blue: {
        light: '#3500d3',
        default: '#240090',
        dark: '#190061',
        darker: "#0c0032"
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      background: {
        def: "#08040e"
      },
      gris: {
        darkest: '',
        dark: '',
        def: '#282828',
        light: '',
        lightest: '',
      },
      white: {
        lightest: '#fdfdfd',
        light: '#ededed',
        default: '#dddddd',
        dark: '#9a9a9a',
        darkest: '#333333'

      },
      footer: {
        default: "#0e0818"
      },
      purple: {
        lightest: "#E0AAFF",
        light: "#C77DFF",
        default: "#9D4EDD",
        dark: "#7B2CBF",
        darkest: "#10002B"

      },
      green: {
        lightest: "#7FFF00",
        light: "#32CD32",
        default: "#228B22",
        dark: "#006400",
        darkest: "#004d00"
      },
    },
    aspectRatio: {
      '6/2': '6/ 2',
      "8/2": "8/2",
      "5/2": "5/2"
    },
  },
  plugins: [],
}