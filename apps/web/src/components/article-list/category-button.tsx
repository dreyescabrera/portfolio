import { ArticleCategory } from './article-list';

type CategoryButtonProps = {
	currentCategory: ArticleCategory | undefined;
	category: ArticleCategory | undefined;
	changeCategory: (newCategory: ArticleCategory | undefined) => void;
};

export const CategoryButton = ({
	category,
	changeCategory,
	currentCategory,
}: CategoryButtonProps) => {
	return (
		<button
			className={`relative top-[1px] mx-1 block border-b-2 border-transparent px-2 pb-2 text-sm leading-4 transition-colors duration-100 hover:bg-terciary/10 dark:text-lightGray lg:pb-0 lg:text-base lg:font-medium xl:mx-2 xl:max-w-none ${
				currentCategory === category ? 'border-b-secondary dark:border-b-terciary' : ''
			}`}
			onClick={() => changeCategory(category)}
		>
			{category ?? 'All'}
		</button>
	);
};
