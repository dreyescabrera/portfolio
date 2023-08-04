import { IconType } from '@/components/common';

type NavItem = {
	text: string;
	path: string;
	iconName: IconType;
};

export const navData: NavItem[] = [
	{ text: 'home', path: '/', iconName: 'home' },
	{
		text: 'about me',
		path: '/about',
		iconName: 'profile',
	},
	{
		text: "work i've done",
		path: '/work',
		iconName: 'bolt',
	},
	{
		text: 'Articles',
		path: '/articles',
		iconName: 'article',
	},
	{ text: 'contact', path: '/contact', iconName: 'mail' },
];
