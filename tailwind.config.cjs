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
        "2xl": "1600px",
      },
      margin: {
        sm: "50px 0 0",
        lg: "100px 0 0",
      },
      colors: {
        primary: "#0E2A69",
        secondary: "#1849B5",
        terciary: "#4164B5",
        quaternary: "#344B82",
        quintenary: "#071536",
      },
      fontFamily: {
        luxury: ["Raleway", "sans-serif"],
        casual: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "hero-littlest": "url('/src/assets/img/hero-littlest.webp')",
        "hero-mobile": "url('/src/assets/img/hero-mobile.webp')",
        "hero-desktop": "url('/src/assets/img/hero-desktop.webp')",
      },
      animation: {
        bounce: "bounce 5s linear infinite",
        "text-machine": "print 1.2s steps(1) infinite",
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
