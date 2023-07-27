import { v4 as uuid } from 'uuid';
import type { IconType } from '@/components/common';

type Skill = {
	id: string;
	name: string;
	iconName: IconType;
};

export const skills: Skill[] = [
	{
		id: uuid(),
		name: 'HTML',
		iconName: 'html',
	},
	{
		id: uuid(),
		name: 'CSS',
		iconName: 'css',
	},
	{
		id: uuid(),
		name: 'SASS',
		iconName: 'sass',
	},
	{
		id: uuid(),
		name: 'JavaScript',
		iconName: 'javascript',
	},
	{
		id: uuid(),
		name: 'ReactJS',
		iconName: 'react',
	},
	{
		id: uuid(),
		name: 'TypeScript',
		iconName: 'typescript',
	},
	{
		id: uuid(),
		name: 'Tailwind',
		iconName: 'tailwind',
	},
	{
		id: uuid(),
		name: 'Vite',
		iconName: 'vite',
	},
	{
		id: uuid(),
		name: 'Figma',
		iconName: 'figma',
	},
	{
		id: uuid(),
		name: 'Git',
		iconName: 'git',
	},
];
