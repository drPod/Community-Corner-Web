/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
    },
    fontFamily: {
      playfair: ["Merriweather", "serif"],
      sans: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
