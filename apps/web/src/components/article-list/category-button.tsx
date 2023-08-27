import type { ArticleCategory } from './article-list';

type CategoryButtonProps = {
	currentCategory: ArticleCategory;
	category: ArticleCategory;
	changeCategory: (newCategory: ArticleCategory) => void;
};

export const CategoryButton = ({
	category,
	changeCategory,
	currentCategory,
}: CategoryButtonProps) => {
	const activeStyles =
		currentCategory === category ? 'border-b-secondary dark:border-b-terciary' : '';

	return (
		<button
			className={`relative top-[1px] mx-1 block border-b-2 border-transparent px-2 py-2 text-sm leading-4 transition-colors duration-100 hover:bg-terciary/10 dark:text-lightGray lg:py-0 lg:text-base lg:font-medium xl:mx-2 xl:max-w-none ${activeStyles}`}
			onClick={() => changeCategory(category)}
		>
			{category}
		</button>
	);
};
