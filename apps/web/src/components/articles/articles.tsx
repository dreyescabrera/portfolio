import { SectionTitle, TextContent } from '@/components/common';
import { getClient } from '@/lib/client';
import { graphql } from '@/services/graphql';
import { ArticleLink } from './article-link';
import Link from 'next/link';

const articlesQuery = graphql(`
	query GetAllArticles {
		articles {
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

export const Articles = async () => {
	const client = getClient();
	const {
		data: { articles },
	} = await client.query({ query: articlesQuery });

	return (
		<section className="m-sm lg:m-lg">
			<SectionTitle>Articles I&apos;ve Written</SectionTitle>
			<TextContent>
				Journalism of my experience creating efficient products while, ironically, learning to make
				them efficient. I try to materialize my knowledge to others, the way I would wanted to learn
				it.
			</TextContent>
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
				className="block border-t-2 p-2 text-center text-base text-gray-600 transition-colors duration-100 hover:bg-gray-100"
				href="/articles"
			>
				See all articles...
			</Link>
		</section>
	);
};
