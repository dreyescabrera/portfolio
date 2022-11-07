/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      margin: {
        sm: "30px 0",
        lg: "100px 0",
      },
      colors: {
        primary: "#0E2A69",
        secondary: "#1849B5",
        terciary: "#4164B5",
        quaternary: "#344B82",
        quintenary: "#071536",
      },
      backgroundImage: {
        "hero-mobile": "url('/img/hero-mobile.webp')",
        "hero-desktop": "url('/img/hero-desktop.webp')",
      },
      animation: {
        bounce: "bounce 3s linear infinite",
        "text-machine": "print 1.5s steps(1) infinite",
      },
      keyframes: {
        print: {
          "50%": { color: "transparent" },
        },
      },
    },
  },
  plugins: [],
};
