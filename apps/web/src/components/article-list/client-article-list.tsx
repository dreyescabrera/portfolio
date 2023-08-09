import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { graphql } from '@/services/graphql';
import { ArticleCategory } from './article-list';
import { ArticleLink } from './article-link';

//duplicated the query because I think nextjs caches the old ones result
const articlesQuery = graphql(`
	query GetArticlesTitlesAndCategory($categories: StringFilterInput, $limit: Int) {
		articles(filters: { category: $categories }, pagination: { limit: $limit }) {
			data {
				attributes {
					title
					slug
					createdAt
					category
				}
			}
		}
	}
`);

type ClientArticleListProps = {
	category: ArticleCategory | undefined;
};

export const ClientArticleList = ({ category }: ClientArticleListProps) => {
	const { data } = useSuspenseQuery(articlesQuery, {
		variables: { categories: { eq: category } },
		context: {
			fetchOptions: {
				method: 'POST',
			},
		},
	});

	const thereIsArticles = Boolean(data?.articles?.data.length);

	if (thereIsArticles) {
		return (
			<ul>
				{data.articles?.data.map(({ attributes }) => (
					<ArticleLink
						key={attributes?.slug as string}
						createdAt={attributes?.createdAt as string}
						slug={attributes?.slug as string}
					>
						{attributes?.title}
					</ArticleLink>
				))}
			</ul>
		);
	}

	return (
		<div className="rounded-md border border-solid bg-gray-100 p-5 text-gray-800 dark:border-secondary/30 dark:bg-transparent dark:text-lightGray/75">
			<p className="mb-3 text-lg">
				Oops. There should be a list of articles here. There is none. I guess I should start
				writing.
			</p>
		</div>
	);
};
