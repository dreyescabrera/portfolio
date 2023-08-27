import { ArticleLink } from './article-link';
import { ArticleNotFound } from './article-not-found';
import type { ArticleCategory } from './article-list';
import type { ArticleListItem } from '@/app/articles/queries';

type ClientArticleListProps = {
	category: ArticleCategory;
	articles: ArticleListItem[];
	locale: 'es' | 'en';
};

export const ClientArticleList = ({ articles, locale, category }: ClientArticleListProps) => {
	const localeArticles = articles.filter((article) => article.locale === locale);

	if (category === 'All') return renderArticles(localeArticles);

	const parsedCategoriesArticles = localeArticles.map((article) => {
		const parsedCategory = article.category.replaceAll('_', ' ');
		return { ...article, category: parsedCategory } as ArticleListItem;
	});

	const categoryFilteredArticles = parsedCategoriesArticles.filter(
		(article) => article.category === category
	);

	return renderArticles(categoryFilteredArticles);
};

function renderArticles(articles: ArticleListItem[]) {
	const thereIsArticles = articles.length > 0;
	if (!thereIsArticles) return <ArticleNotFound />;

	return (
		<ul>
			{articles.map((article) => (
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
