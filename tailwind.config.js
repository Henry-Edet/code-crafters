/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('./assets/do-cool-things.png')",
      },
      screens: {
        mobile: "432px",
        smobile: "300px",
      },
      colors: {
        customBlue: "#0077cc",
        lightBlue: "#3867b3",
        customBlack: "#1b152b",
        customWhite: "#ffffff",
        lightgrey: "#edf0ee",
        almostwhite: "#c0c0c0",
        someshadeofgrey: "#7a7d9c",
        customPurple: "#7a7d9c",
        lavender: "#7f56d9",
        grayishBlue: "#5F6486",
        silver: "#C0C0C0",
      },
    },
  },
  plugins: [],
};
