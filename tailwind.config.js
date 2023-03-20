/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#3282AD",
          // white: "#fff",
          // info: "#056499",
          // success: "#3A3A3A",
          // neutral: "#42A7C3",
          // secondary: "#FF7300",
          // accent: "#CAFC03",
          // "base-100": "#FAFAFA",
          // warning: "#F7E02B",
          // error: "#E60400",
        },
      },
    ],
  },
};
