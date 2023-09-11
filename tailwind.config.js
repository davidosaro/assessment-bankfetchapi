/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/pages/**/index.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        secondary: ['Montserrat', ...fontFamily.sans],
        header: ['Poppins', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}

