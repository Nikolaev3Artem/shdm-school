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
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "50%": { opacity: "0.5", transform: "translateX(50%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.8s ease-out forwards",
      },
      fontFamily: {
        bebas: ['"Bebas Neue Pro"', "sans-serif"],
        gilroyBold: ['"Gilroy-Bold"', "sans-serif"],
        gilroyHeavy: ['"Gilroy-Heavy"', "sans-serif"],
        gilroyLight: ['"Gilroy-Light"', "sans-serif"],
        gilroyMedium: ['"Gilroy-Medium"', "sans-serif"],
        gilroy: ['"Gilroy-Regular"', "sans-serif"],
      },
    },
  },
};
