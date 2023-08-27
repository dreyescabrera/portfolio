import { AnchorButton } from '@/components/common';

export const ArticleNotFound = ({ withLink }: { withLink?: boolean }) => {
	return (
		<div className="rounded-md border border-solid bg-gray-100 p-5 text-gray-800 dark:border-secondary/30 dark:bg-transparent dark:text-lightGray/75">
			<p className="mb-3 text-lg">
				Oops. There should be a list of articles here. There is none. I guess I should start
				writing.
			</p>
			{withLink && (
				<AnchorButton variant="secondary" href="/articles">
					See articles page
				</AnchorButton>
			)}
		</div>
	);
};
