module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "530px",
        md: "800px",
        lg: "1200px",
      },
      colors: {
        primary: "#2f5572",
        accent: "#d59541",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};