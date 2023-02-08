/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/*.{js,jsx}",
		"./src/components/**/*.{js,jsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			screens: {
				xs: "360px",
				"2xl": "1725px",
				"3xl": "2400px",
			},
			margin: {
				sm: "50px 0 0",
				lg: "80px 0 100px",
			},
			gridTemplateColumns: {
				flexible: "repeat(auto-fit, minmax(0, 22.6rem))",
			},
			colors: {
				primary: "#0E2A69",
				secondary: "#1849B5",
				terciary: "#4164B5",
				quaternary: "#071536",
				quintenary: "#ccf6",
				white: "#f9fafb",
				lightGray: "#d5d7db",
				midGray: "#7b8290",
				darkGray: "#1d2635",
				black: "#050c19",
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
