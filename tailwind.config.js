/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      screens: {
        sm: "450px",
        md: "640px",
        lg: "780px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: "#141ED2",
      },
    },
  },
  plugins: [],
};
