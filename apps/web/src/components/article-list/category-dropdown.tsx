import { ChangeEventHandler, MouseEventHandler } from 'react';
import { ArticleCategory } from './article-list';

type CategoryDropDownProps = {
	changeCategory: (newCategory: ArticleCategory | undefined) => void;
	currentCategory: ArticleCategory | undefined;
};

export const CategoryDropDown = ({ currentCategory, changeCategory }: CategoryDropDownProps) => {
	const changeHandler: ChangeEventHandler<HTMLSelectElement> = (ev) => {
		const value = ev.currentTarget.value as ArticleCategory | 'All';
		if (value === 'All') changeCategory(undefined);
		else changeCategory(value);
	};

	return (
		<div className="sm:hidden">
			<label
				htmlFor="article-category"
				className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>
				Select an option
			</label>
			<select
				id="article-category"
				onChange={changeHandler}
				className="block w-full rounded-md border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 outline-none focus:border-secondary focus:ring-secondary dark:border-gray-800 dark:bg-quaternary dark:text-lightGray dark:focus:border-secondary dark:focus:ring-secondary"
			>
				<option selected={currentCategory === undefined}>All</option>
				<option selected={currentCategory === 'Software Engineering'}>Software Engineering</option>
				<option selected={currentCategory === 'Web Development'}>Web Development</option>
				<option selected={currentCategory === 'Adventures & Learnings'}>
					Adventures & Learnings
				</option>
				<option selected={currentCategory === 'Growth & Reflections'}>Growth & Reflections</option>
			</select>
		</div>
	);
};
