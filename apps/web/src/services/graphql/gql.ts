/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
	'\n\tquery GetFullArticle($id: StringFilterInput) {\n\t\tarticles(filters: { slug: $id }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t\ttext\n\t\t\t\t\tcategory\n\t\t\t\t\treadTime\n\t\t\t\t\tcreatedAt\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetFullArticleDocument,
	'\n\tquery GetSlugs {\n\t\tarticles {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetSlugsDocument,
	'\n\tquery GetAllLocalesArticleTitles {\n\t\tarticles(locale: "all") {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t\tslug\n\t\t\t\t\tcategory\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tlocale\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetAllLocalesArticleTitlesDocument,
	'\n\tquery GetArticleTitles($categories: StringFilterInput, $limit: Int) {\n\t\tarticles(filters: { category: $categories }, pagination: { limit: $limit }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t\tslug\n\t\t\t\t\tcreatedAt\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetArticleTitlesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery GetFullArticle($id: StringFilterInput) {\n\t\tarticles(filters: { slug: $id }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t\ttext\n\t\t\t\t\tcategory\n\t\t\t\t\treadTime\n\t\t\t\t\tcreatedAt\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery GetFullArticle($id: StringFilterInput) {\n\t\tarticles(filters: { slug: $id }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t\ttext\n\t\t\t\t\tcategory\n\t\t\t\t\treadTime\n\t\t\t\t\tcreatedAt\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery GetSlugs {\n\t\tarticles {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery GetSlugs {\n\t\tarticles {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tslug\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery GetAllLocalesArticleTitles {\n\t\tarticles(locale: "all") {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t\tslug\n\t\t\t\t\tcategory\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tlocale\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery GetAllLocalesArticleTitles {\n\t\tarticles(locale: "all") {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t\tslug\n\t\t\t\t\tcategory\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tlocale\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery GetArticleTitles($categories: StringFilterInput, $limit: Int) {\n\t\tarticles(filters: { category: $categories }, pagination: { limit: $limit }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t\tslug\n\t\t\t\t\tcreatedAt\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery GetArticleTitles($categories: StringFilterInput, $limit: Int) {\n\t\tarticles(filters: { category: $categories }, pagination: { limit: $limit }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\ttitle\n\t\t\t\t\tslug\n\t\t\t\t\tcreatedAt\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
