import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:1337/graphql',
	documents: ['src/**/*.tsx'],
	generates: {
		'src/services/graphql/': {
			preset: 'client',
			plugins: [],
		},
	},
	hooks: {
		afterAllFileWrite: ['eslint --fix'],
	},
};

export default config;
