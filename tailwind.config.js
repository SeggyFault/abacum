/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {},
    colors: {
      neutral: {
        100: "#FFFFFF",
        200: "#F6F7F8",
        300: "#ECEEF0",
        400: "#BDC4C7",
        500: "#3F484D",
        600: "#222200",
      },
      blue: {
        100: "#EBF8FF",
        200: "#D9F2FF",
        300: "#0078B2",
        400: "#006FA5",
        500: "#006799",
      },
      emerald: {
        100: "#57D9B9",
        200: "#FFDF80",
        300: "#1DBF97",
      },
      gold: {
        100: "#FFD559",
        200: "#FFDF80",
      },
      red: {
        100: "#BF434D",
      },
    },
    fontFamily: {
      inter: ["Inter", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};
