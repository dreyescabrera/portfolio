/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
		'./src/app/**/*.{js,jsx,ts,tsx}',
		'./src/hooks/*.{js,ts}',
		'./app/*.{js,jsx,ts,tsx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/components/**/*.{js,jsx,ts,tsx}',
		'./app/hooks/*.{js,ts}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				xs: '360px',
				'2xl': '1725px',
				'3xl': '2400px',
			},
			gridTemplateColumns: {
				flexible: 'repeat(auto-fit, minmax(0, 22.6rem))',
			},
			colors: {
				primary: '#0E2A69',
				secondary: '#1849B5',
				terciary: '#4164B5',
				quaternary: '#071536',
				quintenary: '#ccf6',

				darkPrimary: '#B9C8E8',
				darkSecondary: '#7491D2',

				white: '#f9fafb',
				lightGray: '#d5d7db',
				midGray: '#7b8290',
				darkGray: '#1d2635',
				black: '#050c19',
			},
			fontFamily: {
				luxury: ['var(--font-raleway)', 'sans-serif'],
				casual: ['var(--font-outfit)', 'sans-serif'],
			},
			animation: {
				bounce: 'bounce 5s linear infinite',
				'text-machine': 'print 1.2s steps(1) infinite',
			},
			keyframes: {
				print: {
					'50%': { color: 'transparent' },
				},
			},
		},
	},
	plugins: [],
};
