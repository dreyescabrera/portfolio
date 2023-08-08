import { MDXRemote } from 'next-mdx-remote/rsc';
import { getClient } from '@/lib/client';
import { graphql } from '@/services/graphql';
import { AnchorButton, PageSection, PageWrapper } from '@/components/common';

type ArticlePageProps = {
	params: {
		slug: string;
	};
};

const fullArticleQuery = graphql(`
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

export default async function ArticlePage({ params }: ArticlePageProps) {
	const { slug } = params;
	const client = getClient();
	const {
		data: { articles },
	} = await client.query({
		query: fullArticleQuery,
		variables: {
			id: { eq: slug },
		},
	});

	const data = articles?.data[0].attributes;
	const date = new Date(data?.createdAt);
	const createdAtDate = new Intl.DateTimeFormat('en-us', {
		dateStyle: 'long',
	}).format(new Date(date));

	return (
		<PageWrapper>
			<PageSection>
				<div className="prose mx-auto dark:prose-invert md:prose-lg lg:prose-xl prose-headings:font-luxury prose-headings:text-primary prose-img:rounded-md dark:prose-headings:text-darkPrimary dark:prose-p:text-lightGray">
					<span className="not-prose">
						<AnchorButton variant="secondary" href="/articles">
							Go to Articles
						</AnchorButton>
					</span>
					<div className="my-5 flex justify-between border-b text-gray-500 dark:text-lightGray lg:text-lg">
						<span>{createdAtDate}</span>
						<span>{data?.readTime} min read</span>
					</div>
					<h1>{data?.title as string}</h1>
					<MDXRemote source={data?.text as string} />
				</div>
			</PageSection>
		</PageWrapper>
	);
}
