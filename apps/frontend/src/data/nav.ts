import { IconType } from '@/components/common';

type NavItem = {
	text: string;
	id: string;
	iconName: IconType;
};

export const navData: NavItem[] = [
	{ text: 'home', id: 'home', iconName: 'home' },
	{
		text: 'who am i?',
		id: 'about',
		iconName: 'profile',
	},
	{
		text: 'projects',
		id: 'projects',
		iconName: 'bolt',
	},
	{ text: 'contact', id: 'contact', iconName: 'mail' },
];
