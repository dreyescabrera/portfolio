import { graphql } from '@/services/graphql';
import type { ArticleCategory } from '@/components/article-list';

export const AllLocalesArticleTitlesQuery = graphql(`
	query GetAllLocalesArticleTitles {
		articles(locale: "all") {
			data {
				attributes {
					title
					slug
					category
					createdAt
					locale
				}
			}
		}
	}
`);

export type ArticleListItem = {
	title: string;
	slug: string;
	createdAt?: string;
	category: ArticleCategory;
	locale: 'es' | 'en';
};
