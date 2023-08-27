import { type ArticleCategory, ArticleListWithFilter } from '@/components/article-list';
import { PageSection, PageWrapper, SectionTitle, TextContent } from '@/components/common';
import { getClient } from '@/lib/client';
import { AllLocalesArticleTitlesQuery, type ArticleListItem } from './queries';
import type { Metadata } from 'next';

export default async function ArticleHomePage() {
	const client = getClient();
	const {
		data: { articles: articlesData },
	} = await client.query({
		query: AllLocalesArticleTitlesQuery,
	});

	const articlesAttributes = articlesData?.data || [];

	const articles: ArticleListItem[] = [];

	articlesAttributes.forEach((article) => {
		if (!article.attributes) return null;

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { __typename, ...articleData } = article.attributes;
		const unionTypedCategory = articleData.category as unknown as ArticleCategory;

		articles.push({
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
			<ArticleListWithFilter articles={articles} />
		</PageWrapper>
	);
}

export const metadata: Metadata = {
	title: 'Articles',
	description:
		'Journalism of my experience creating efficient products while, ironically, learning to make them efficient. I try to materialize my knowledge to others, the way I would wanted to learn it.',
};
