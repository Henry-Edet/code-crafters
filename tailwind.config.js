/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('./assets/do-cool-things.png')",
      },
      screens: {
        mobile: "431px",
      },
    },
  },
  plugins: [],
};
