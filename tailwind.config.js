module.exports = {
  purge: [
    "app/views/*/*.html.erb",
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ['"Roboto Slab"', "serif"],
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        tosca: {
          100: "#23C7C6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  //   content: [
  //     // Example content paths...
  //     "./public/**/*.html",
  //     "./src/**/*.{js,jsx,ts,tsx,vue}",
  //   ],
  //   theme: {
  //     fontFamily: {
  //       sans: ["Roboto", "sans-serif"],
  //       serif: ['"Roboto Slab"', "serif"],
  //       body: ["Roboto", "sans-serif"],
  //     },
  //     extend: {
  //     //   colors: {
  //     //     tosca: {
  //     //       100: "#23C7C6",
  //     //     },
  //     //   },
  //     },
  //   },
  //   variants: {
  //     extend: {},
  //   },
  //   plugins: [],
};
