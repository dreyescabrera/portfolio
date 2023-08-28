'use server';

import { cookies } from 'next/headers';
import type { Theme } from '@/components/sidebar';

export const setCookieTheme = (theme: string) => {
	cookies().set('theme', theme);
};

export const getCookieTheme = () => {
	const cookie = cookies().get('theme');
	const theme = cookie?.value ?? 'light';
	return theme as Theme;
};

export const deleteCookieTheme = () => {
	cookies().delete('theme');
};
