import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:1337/graphql',
	documents: ['src/**/*.tsx', 'src/**/*.ts'],
	generates: {
		'src/services/graphql/': {
			preset: 'client',
			plugins: [],
		},
	},
};

export default config;
