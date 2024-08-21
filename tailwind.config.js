import colors from "tailwindcss/colors.js";
const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app2.vue",
    "./error.vue",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      "vtd-primary": colors.sky, // Light mode Datepicker color
      "vtd-secondary": colors.gray, // Dark mode Datepicker color
      blue: colors.blue,
      green: colors.green,
      red: colors.red,
      amber: colors.amber,
      gray: colors.gray,
      white: colors.white,
      yellow: colors.yellow,
      fuchsia: colors.fuchsia,
      cyan: colors.cyan,
      primary: '#7D8506',
      secondary: '#F9A825',
    },
    container: {
      center: true,
      // padding: '2rem',
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: []
}

