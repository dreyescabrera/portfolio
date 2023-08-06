'use client';

import { useState } from 'react';
import { PageSection, SectionTitle } from '@/components/common';
import { ArticleCategory } from './article-list';
import { CategoryButton } from './category-button';
import { ApolloWrapper } from '@/lib/apollo-provider';
import { Suspense } from 'react';
import { ClientArticleList } from './client-article-list';
import { Skeleton } from './skeleton';
import { CategoryDropDown } from './category-dropdown';

export const ArticleListWithFilter = () => {
	const [category, setCategory] = useState<ArticleCategory | undefined>(undefined);

	const changeCategory = (newCategory: ArticleCategory | undefined) => {
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
						category={undefined}
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
			<ApolloWrapper>
				<Suspense fallback={<Skeleton />}>
					<ClientArticleList category={category} />
				</Suspense>
			</ApolloWrapper>
		</div>
	);
};
