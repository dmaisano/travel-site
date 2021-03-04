module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "530px",
        md: "800px",
        lg: "1010px",
      },
      colors: {
        primary: "#2f5572",
        accent: "#d59541",
      },
      borderWidth: {
        10: "10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
