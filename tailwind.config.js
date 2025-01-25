/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*/*.html", "./*/*/*.html", "./*/*/*/*.html", "./*/*/*/*/*.html"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xl: { max: "1440px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "380px" },
    },
    extend: {
      colors: {
        yellow: "#FDCE40",
        blue: "#009FE2",
        black: "#2F2F2F",
        red: "#DC0037",
      },
    },
  },
};
