import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app2.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
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
  plugins: [],
}

