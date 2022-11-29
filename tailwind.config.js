const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  //aplica os estilos somente nos arquivos deste caminho
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      //passa a font Lato e se não conseguir pegue a font padrão do tailwind
      Lato: ["Lato", ...defaultTheme.fontFamily.sans],
      Josefin: ["Josegin Sans", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
