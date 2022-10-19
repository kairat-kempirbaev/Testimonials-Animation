/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/*.html"],
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "mv":"hsl(263, 55%, 52%)",
        "vdgb":"hsl(217, 19%, 35%)",
        "vdbb":'hsl(219, 29%, 14%)',
        "lg": "hsl(0, 0%, 81%)",
        "lgb":"hsl(210, 46%, 95%)"
      },
    },
  },
  plugins: [],
}