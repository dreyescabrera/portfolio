module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		amd: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'next',
		'next/core-web-vitals',
		'prettier',
	],
	ignorePatterns: ['.eslintrc.js', 'prettier.config.js', '**/services/graphql'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./apps/*/tsconfig.json'],
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
};
