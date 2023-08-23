import type { Metadata } from 'next';
import { ArticleListWithFilter } from '@/components/article-list';
import { PageSection, PageWrapper, SectionTitle, TextContent } from '@/components/common';
import { getClient } from '@/lib/client';
import { graphql } from '@/services/graphql';

const allLocalesArticleTitlesQuery = graphql(`
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

export type ArticleCategoryRaw =
	| 'Web_Development'
	| 'Software_Engineering'
	| 'Adventures_&_Learnings'
	| 'Growth_&_Reflections';

export type ArticleListItem = {
	title: string;
	slug: string;
	createdAt?: string;
	category: ArticleCategoryRaw;
	locale: 'es' | 'en';
};

export default async function ArticleHomePage() {
	const client = getClient();
	const {
		data: { articles },
	} = await client.query({
		query: allLocalesArticleTitlesQuery,
	});

	const articlesAttributes = articles?.data || [];

	const articlesData: ArticleListItem[] = [];

	articlesAttributes.forEach((article) => {
		if (!article.attributes) return null;

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { __typename, ...articleData } = article.attributes;
		const unionTypedCategory = articleData.category as unknown as ArticleCategoryRaw;

		articlesData.push({
			...articleData,
			category: unionTypedCategory,
		} as ArticleListItem);
	});

	return (
		<PageWrapper>
			<PageSection>
				<SectionTitle>Articles I&apos;ve Written</SectionTitle>
				<TextContent>
					Journalism of my experience creating efficient products while, ironically, learning to
					make them efficient. I try to materialize my knowledge to others, the way I would wanted
					to learn it.
				</TextContent>
			</PageSection>
			<ArticleListWithFilter articles={articlesData} />
		</PageWrapper>
	);
}

export const metadata: Metadata = {
	title: 'Articles',
	description:
		'Journalism of my experience creating efficient products while, ironically, learning to make them efficient. I try to materialize my knowledge to others, the way I would wanted to learn it.',
};
