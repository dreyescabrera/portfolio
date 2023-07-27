/** @type {import("prettier").Options} */
module.exports = {
	semi: true,
	singleQuote: true,
	printWidth: 100,
	tabWidth: 2,
	useTabs: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	endOfLine: 'lf',
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindConfig: './tailwind.config.js',
	tailwindFunctions: ['tw'],
};
