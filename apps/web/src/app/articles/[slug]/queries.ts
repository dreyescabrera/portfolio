import { graphql } from '@/services/graphql';

export const GetFullArticleQuery = graphql(`
	query GetFullArticle($id: StringFilterInput) {
		articles(filters: { slug: $id }) {
			data {
				attributes {
					title
					text
					category
					readTime
					createdAt
				}
			}
		}
	}
`);

export const GetSlugsQuery = graphql(`
	query GetSlugs {
		articles {
			data {
				attributes {
					slug
				}
			}
		}
	}
`);
