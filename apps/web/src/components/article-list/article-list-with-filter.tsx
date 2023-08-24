'use client';

import { useState } from 'react';
import { SectionTitle } from '@/components/common';
import { ArticleCategory } from './article-list';
import { CategoryButton } from './category-button';
// import { ApolloWrapper } from '@/lib/apollo-provider';
// import { Suspense } from 'react';
// import { Skeleton } from './skeleton';
import { CategoryDropDown } from './category-dropdown';
import { ClientArticleList } from './client-article-list';
import type { ArticleListItem } from '@/app/articles/page';

type ArticleListWithFilterProps = {
	articles: ArticleListItem[];
};

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
					<CategoryButton
						currentCategory={category}
						category={'All'}
						changeCategory={changeCategory}
					/>
					<CategoryButton
						currentCategory={category}
						category={'Software Engineering'}
						changeCategory={changeCategory}
					/>
					<CategoryButton
						currentCategory={category}
						category={'Web Development'}
						changeCategory={changeCategory}
					/>
					<CategoryButton
						currentCategory={category}
						category={'Adventures & Learnings'}
						changeCategory={changeCategory}
					/>
					<CategoryButton
						currentCategory={category}
						category={'Growth & Reflections'}
						changeCategory={changeCategory}
					/>
				</div>
			</div>
			<CategoryDropDown currentCategory={category} changeCategory={changeCategory} />
			<ClientArticleList articles={articles} category={category} locale="en" />
		</div>
	);
};
