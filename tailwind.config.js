const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * Tailwind configuration.
 *
 * Configures the framework and adds our custom design tokens
 */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...defaultTheme.colors,
      primary: colors.sky,
      secondary: colors.blueGray,
      ternary: colors.cyan,
      positive: colors.green,
      negative: colors.red,
      monochrome: colors.coolGray,
    },
    fontFamily: {
      standard: ["Lato"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
