import { ArticleCategory } from './article-list';
import { ArticleLink } from './article-link';
import { ArticleListItem } from '@/app/articles/page';

type ClientArticleListProps = {
	category: ArticleCategory;
	articles: ArticleListItem[];
	locale: 'es' | 'en';
};

export const ClientArticleList = ({ articles, locale, category }: ClientArticleListProps) => {
	const localeArticles = articles.filter((article) => article.locale === locale);

	if (category === 'All') {
		const thereIsArticles = localeArticles.length > 0;
		if (!thereIsArticles) {
			return (
				<div className="rounded-md border border-solid bg-gray-100 p-5 text-gray-800 dark:border-secondary/30 dark:bg-transparent dark:text-lightGray/75">
					<p className="mb-3 text-lg">
						Oops. There should be a list of articles here. There is none. I guess I should start
						writing.
					</p>
				</div>
			);
		}

		return (
			<ul>
				{localeArticles.map((article) => (
					<ArticleLink
						key={article.slug}
						createdAt={article?.createdAt as string}
						slug={article.slug}
					>
						{article?.title}
					</ArticleLink>
				))}
			</ul>
		);
	}

	const parsedCategoriesArticles = localeArticles.map((article) => {
		const parsedCategory = article.category.replaceAll('_', ' ');
		return { ...article, category: parsedCategory };
	});

	const categoryFilteredArticles = parsedCategoriesArticles.filter(
		(article) => article.category === category
	);

	const thereIsArticles = categoryFilteredArticles.length > 0;

	if (!thereIsArticles) {
		return (
			<div className="rounded-md border border-solid bg-gray-100 p-5 text-gray-800 dark:border-secondary/30 dark:bg-transparent dark:text-lightGray/75">
				<p className="mb-3 text-lg">
					Oops. There should be a list of articles here. There is none. I guess I should start
					writing.
				</p>
			</div>
		);
	}

	return (
		<ul>
			{categoryFilteredArticles.map((article) => (
				<ArticleLink
					key={article.slug}
					createdAt={article?.createdAt as string}
					slug={article.slug}
				>
					{article?.title}
				</ArticleLink>
			))}
		</ul>
	);
};
