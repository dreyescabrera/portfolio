'use client';

import { useState } from 'react';
import { setCookieTheme, deleteCookieTheme } from '@/utils';
import { Icon } from '@/components/common';

export type Theme = 'light' | 'dark';

type ThemeSwitchProps = {
	initialTheme: Theme;
};

export const ThemeSwitch = ({ initialTheme }: ThemeSwitchProps) => {
	const [theme, setTheme] = useState<Theme>(initialTheme);

	const switchTheme = () => {
		if (theme === 'dark') {
			document.documentElement.classList.remove('dark');
			setTheme('light');
			deleteCookieTheme();
			return;
		}
		document.documentElement.classList.add('dark');
		setTheme('dark');
		setCookieTheme('dark');
	};

	return (
		<div className="mt-2 flex items-center justify-center gap-2 xs:mt-6 md:self-start">
			<Icon type="sun" styles="w-6 h-full text-white" />
			<button
				className="h-6 w-14 cursor-pointer overflow-hidden rounded-full bg-red-50 p-0.5"
				onClickCapture={switchTheme}
			>
				<span
					className={`block h-full w-5 rounded-full bg-terciary bg-gradient-to-r from-terciary to-primary transition-transform duration-500 ease-in-out ${
						theme === 'dark' ? 'translate-x-8 rotate-180' : ''
					}`}
				></span>
			</button>
			<Icon type="moon" styles="w-6 h-full text-white" />
		</div>
	);
};
