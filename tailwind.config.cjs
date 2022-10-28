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
  safelist: ["translate-y-0"],
};
