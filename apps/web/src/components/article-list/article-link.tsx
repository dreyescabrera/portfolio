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
		<li className="rounded-sm border-b-2 text-lg transition-colors duration-100 last:border-none hover:bg-gray-100 dark:border-secondary/30 dark:hover:bg-quaternary">
			<Link
				className="flex h-full flex-col justify-between gap-2 p-3 font-medium leading-6 sm:flex-row sm:items-center"
				href={`/articles/${slug}`}
			>
				<span className="dark:text-lightGray">{children}</span>
				<p className="text-sm text-gray-500">{createdAtDate}</p>
			</Link>
		</li>
	);
};
