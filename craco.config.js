module.exports = {
  style: {
    postcss: {
      plugins: [
        // require("postcss-import"),
        require("tailwindcss"),
        // require("postcss-custom-media"),
        // require("postcss-nested-ancestors"),
        require("postcss-nested"),
        require("autoprefixer"),
      ],
    },
  },
};
