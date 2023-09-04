'use client';

import { Icon } from '@/components/common';

export type Theme = 'light' | 'dark';

export const ThemeSwitch = () => {
	const switchTheme = () => {
		document.documentElement.classList.toggle('dark');
	};

	return (
		<div className="mt-2 flex items-center justify-center gap-2 xs:mt-6 md:self-start">
			<Icon type="sun" styles="w-6 h-full text-white" />
			<button
				className="h-6 w-14 cursor-pointer overflow-hidden rounded-full bg-red-50 p-0.5"
				onClickCapture={switchTheme}
			>
				<span
					className={`block h-full w-5 rounded-full bg-terciary bg-gradient-to-r from-terciary to-primary transition-transform duration-500 ease-in-out dark:translate-x-8 dark:rotate-180`}
				></span>
			</button>
			<Icon type="moon" styles="w-6 h-full text-white" />
		</div>
	);
};
