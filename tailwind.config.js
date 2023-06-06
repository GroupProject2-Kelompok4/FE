/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "dark-alta": "#19345E",
        "orange-alta": "#F47522",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#19345E",

          secondary: "#0891b2",

          accent: "#F47522",

          neutral: "#CCCCCC",

          "base-100": "#FFFFFF",

          info: "#8DCAC1",

          success: "#9DB787",

          warning: "#FFD25F",

          error: "#FC9581",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
