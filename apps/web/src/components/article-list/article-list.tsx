import { SectionTitle, TextContent } from '@/components/common';
import { getClient } from '@/lib/client';
import { graphql } from '@/services/graphql';
import { ArticleLink } from './article-link';
import Link from 'next/link';

type ArticleCategory =
	| 'Web Development'
	| 'Software Engineering'
	| 'Adventures & Learnings'
	| 'Growth & Reflections';

type ArticleList = {
	categories?: ArticleCategory[];
	limit?: number;
};

const articlesQuery = graphql(`
	query GetAllArticles($categories: StringFilterInput, $limit: Int) {
		articles(filters: { category: $categories }, pagination: { limit: $limit }) {
			data {
				attributes {
					title
					slug
					createdAt
				}
			}
		}
	}
`);

export const ArticleList = async ({ categories, limit }: ArticleList) => {
	const client = getClient();
	const {
		data: { articles },
	} = await client.query({
		query: articlesQuery,
		variables: {
			categories: {
				in: categories,
			},
			limit,
		},
	});

	const thereIsArticles = Boolean(articles?.data.length);

	return (
		<section className="m-sm lg:m-lg">
			<SectionTitle>Articles I&apos;ve Written</SectionTitle>
			<TextContent>
				Journalism of my experience creating efficient products while, ironically, learning to make
				them efficient. I try to materialize my knowledge to others, the way I would wanted to learn
				it.
			</TextContent>
			{thereIsArticles ? (
				<>
					<ul>
						{articles?.data.map(({ attributes }) => (
							<ArticleLink
								key={attributes?.slug as string}
								createdAt={attributes?.createdAt}
								slug={attributes?.slug as string}
							>
								{attributes?.title}
							</ArticleLink>
						))}
					</ul>
					<Link
						className="block border-t-2 p-2 text-center text-base text-gray-600 transition-colors duration-100 hover:bg-gray-100 dark:border-secondary/30 dark:text-lightGray/75 dark:hover:bg-quaternary"
						href="/articles"
					>
						See all articles...
					</Link>
				</>
			) : (
				<div className="rounded-md border border-solid bg-gray-100 p-5 text-gray-800 dark:border-secondary/30 dark:bg-transparent dark:text-lightGray/75">
					<p className="mb-3 text-lg">
						Oops. Here should have been a list of articles. There is not. Guess I should start
						writing.
					</p>
					<Link
						className="inline-block rounded-md border border-solid border-gray-500 p-2 text-center text-base text-gray-800 transition-colors duration-100 hover:bg-gray-200 dark:border-secondary/20 dark:text-lightGray/75 dark:hover:bg-quaternary"
						href="/articles"
					>
						See articles page
					</Link>
				</div>
			)}
		</section>
	);
};
