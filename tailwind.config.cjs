/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('/img/hero-desktop.webp')",
      },
    },
  },
  plugins: [],
};
