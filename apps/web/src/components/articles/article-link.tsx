import type { ReactNode } from 'react';
import Link from 'next/link';

type ArticleLinkProps = {
	slug: string;
	createdAt: string;
	children: ReactNode;
};

export const ArticleLink = ({ slug, children, createdAt }: ArticleLinkProps) => {
	const createdAtDate = new Intl.DateTimeFormat('en-us', {
		dateStyle: 'long',
	}).format(new Date(createdAt));

	return (
		<li className="flex flex-col justify-between gap-2 rounded-sm border-b-2 p-3 text-lg transition-colors duration-100 last:border-none hover:bg-gray-100 sm:flex-row sm:items-center">
			<Link className="font-medium leading-6" href={`/articles/${slug}`}>
				{children}
			</Link>
			<p className="text-sm text-gray-500">{createdAtDate}</p>
		</li>
	);
};
