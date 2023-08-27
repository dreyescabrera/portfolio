'use client';

import { useState } from 'react';
import { SectionTitle } from '@/components/common';
import { CategoryButton } from './category-button';
import { CategoryDropDown } from './category-dropdown';
import { ClientArticleList } from './client-article-list';
import type { ArticleCategory } from './article-list';
import type { ArticleListItem } from '@/app/articles/queries';

type ArticleListWithFilterProps = {
	articles: ArticleListItem[];
};

const articleCategories = [
	'All',
	'Software Engineering',
	'Web Development',
	'Adventures & Learnings',
	'Growth & Reflections',
] as const;

export const ArticleListWithFilter = ({ articles }: ArticleListWithFilterProps) => {
	const [category, setCategory] = useState<ArticleCategory>('All');

	const changeCategory = (newCategory: ArticleCategory) => {
		setCategory(newCategory);
	};

	return (
		<div>
			<div className="mb-4 flex max-w-full flex-col justify-between gap-4 border-b-2 border-secondary/30 lg:flex-row">
				<span>
					<SectionTitle variant="h3">Filter by category</SectionTitle>
				</span>
				<div className="hidden sm:flex">
					{articleCategories.map((articleCategory) => (
						<CategoryButton
							key={articleCategory}
							currentCategory={category}
							category={articleCategory}
							changeCategory={changeCategory}
						/>
					))}
				</div>
			</div>
			<CategoryDropDown currentCategory={category} changeCategory={changeCategory} />
			<ClientArticleList articles={articles} category={category} locale="en" />
		</div>
	);
};
