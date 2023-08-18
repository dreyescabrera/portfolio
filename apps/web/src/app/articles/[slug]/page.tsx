import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { AnchorButton, PageSection, PageWrapper } from '@/components/common';
import { Metadata } from 'next';
import { GetFullArticleQuery, GetSlugsQuery } from './queries';
import { getClient } from '@/lib/client';

type ArticlePageProps = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams() {
	const client = getClient();
	const {
		data: { articles },
	} = await client.query({
		query: GetSlugsQuery,
		context: {
			fetchOptions: {
				cache: 'no-store',
			},
		},
	});

	const slugs = articles?.data;

	if (slugs)
		return slugs.map((slug) => ({
			slug: slug.attributes?.slug,
		}));

	return [];
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
	const { slug } = params;
	const client = getClient();
	const {
		data: { articles },
	} = await client.query({
		query: GetFullArticleQuery,
		variables: {
			id: { eq: slug },
		},
	});

	const article = articles?.data[0];

	if (!article) return notFound();

	const data = articles?.data[0].attributes;

	if (!data) return notFound();

	const firstParagraph = data.text.split('\n')[0];

	return {
		title: data.title,
		description: firstParagraph,
		openGraph: {
			title: data.title + ' by Diego Reyes Cabrera',
			description: firstParagraph,
		},
	};
}

export default async function ArticlePage({ params }: ArticlePageProps) {
	const { slug } = params;
	const client = getClient();
	const {
		data: { articles },
	} = await client.query({
		query: GetFullArticleQuery,
		variables: {
			id: { eq: slug },
		},
	});

	const article = articles?.data[0];

	if (!article) return notFound();

	const data = articles?.data[0].attributes;

	if (!data) return notFound();

	const date = new Date(data.createdAt as string);
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
					<h1>{data.title}</h1>
					<MDXRemote source={data.text} />
				</div>
			</PageSection>
		</PageWrapper>
	);
}
