'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@/components/common/icon';

export const ThemeSwitch = () => {
	const [isDark, setIsDark] = useState<boolean>(false);

	const switchTheme = () => {
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			setIsDark(false);
			return;
		}
		document.documentElement.classList.add('dark');
		localStorage.setItem('theme', 'dark');
		setIsDark(true);
	};

	useEffect(() => {
		const userTheme = localStorage.getItem('theme');
		const systemTheme = matchMedia('(prefers-color-scheme: dark)').matches;
		if (userTheme === 'dark' || (!userTheme && systemTheme)) {
			document.documentElement.classList.add('dark');
			setIsDark(true);
		}
	}, []);

	return (
		<div className="mt-2 flex items-center justify-center gap-2 xs:mt-6 md:self-start">
			<Icon type="sun" styles="w-6 h-full text-white" />
			<div
				className="h-6 w-14 cursor-pointer overflow-hidden  rounded-full bg-red-50 p-0.5"
				onClickCapture={switchTheme}
			>
				<div
					className={`h-full w-5 rounded-full bg-terciary bg-gradient-to-r from-terciary to-primary transition-transform duration-500 ease-in-out ${
						isDark ? 'translate-x-8 rotate-180' : ''
					}`}
				></div>
			</div>
			<Icon type="moon" styles="w-6 h-full text-white" />
		</div>
	);
};
