module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: "Montserrat",
      josefin: "Josefin Sans",
    },
    extend: {
      colors: {
        "regal-purple": "#6c72cb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
