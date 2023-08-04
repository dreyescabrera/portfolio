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
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'warn',
	},
	overrides: {
		files: ['src/**/*.tsx'],
		processor: '@graphql-eslint/graphql',
	},
};
