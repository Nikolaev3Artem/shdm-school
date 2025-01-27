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
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        slideInRight: "slideInRight 0.8s ease-out forwards",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
      },
      fontFamily: {
        bebas: ['"Bebas Neue Pro"', "sans-serif"],
        gilroyBold: ['"Gilroy-Bold"', "sans-serif"],
        gilroyMedium: ['"Gilroy-Medium"', "sans-serif"],
        gilroy: ['"Gilroy-Regular"', "sans-serif"],
      },
    },
  },
};
