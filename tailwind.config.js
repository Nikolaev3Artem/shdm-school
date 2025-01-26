/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*/*.html", "./*/*/*.html", "./*/*/*/*.html", "./*/*/*/*/*.html"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xl: { max: "1600px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "380px" },
    },
    extend: {
      colors: {
        yellow: "#FDCE40",
        blue: "#009FE2",
        black: "#000000",
        red: "#DC0037",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        gilroyBold: ['"Gilroy-Bold"', "sans-serif"],
        gilroyHeavy: ['"Gilroy-Heavy"', "sans-serif"],
        gilroyLight: ['"Gilroy-Light"', "sans-serif"],
        gilroyMedium: ['"Gilroy-Medium"', "sans-serif"],
        gilroy: ['"Gilroy-Regular"', "sans-serif"],
      },
    },
  },
};
