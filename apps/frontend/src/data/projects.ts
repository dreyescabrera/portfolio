import { v4 as uuid } from 'uuid';
import type { IconType } from '@/components/common';

type Project = {
	id: string;
	title: string;
	img: {
		src: string;
		alt: string;
	};
	description: string;
	demo: string;
	source: string;
	technologies: Technology[];
};

type Technology = {
	id: string;
	name: IconType;
};

export const projects: Project[] = [
	{
		id: uuid(),
		title: 'Country Quiz',
		img: {
			src: '/img/quiz-game.webp',
			alt: 'Country Quiz - A Game for those who love geography ',
		},
		description:
			"Fetches countries data from the <strong>REST Countries API</strong>. Coded applying <strong>OOP paradigm</strong>, it's a quiz that randomly chooses a country and formulates a question over it, subregion level.",
		demo: 'https://realdiegor.github.io/Country-quiz/',
		source: 'https://github.com/realDiegoR/Country-quiz',
		technologies: [
			{ id: uuid(), name: 'html' },
			{ id: uuid(), name: 'tailwind' },
			{ id: uuid(), name: 'typescript' },
		],
	},

	{
		id: uuid(),
		title: 'Restaurant App',
		img: {
			src: '/img/veranalia.webp',
			alt: 'Veranalia, a venezuelan restaurant app.',
		},
		description:
			'Restaurant website showcasing an <strong>interactive menu cart</strong>, Google Maps and Instagram API integration, routes and more. <strong>Keen eye to detail</strong>, based on own Figma design.',
		demo: 'https://veranalia-food.vercel.app/',
		source: 'https://github.com/realDiegoR/restaurant-app',
		technologies: [
			{ id: uuid(), name: 'react' },
			{ id: uuid(), name: 'sass' },
			{ id: uuid(), name: 'figma' },
		],
	},
	{
		id: uuid(),
		title: 'Portfolio',
		img: {
			src: '/img/portfolio.webp',
			alt: 'Personal website that showcases my professional skills.',
		},
		description:
			'My professional progress and skills showcase. It features an amazing <strong>chat-like animation</strong>, built using recursion for text manipulation and <strong>useReducer</strong> for its state management.',
		demo: 'https://www.realdiegor.dev/',
		source: 'https://github.com/realDiegoR/portfolio',
		technologies: [
			{ id: uuid(), name: 'react' },
			{ id: uuid(), name: 'tailwind' },
			{ id: uuid(), name: 'vite' },
		],
	},
	{
		id: uuid(),
		title: 'Facenote',
		img: {
			src: '/img/facenote.webp',
			alt: 'Facenote, a landing page with parallax effect',
		},
		description:
			'Generates a random set of icons in the background that move at different speed with <strong>parallax effect</strong>. It also features a clean responsive design and navigation bar.',
		demo: 'https://realdiegor.github.io/parallax-effect/',
		source: 'https://github.com/realDiegoR/parallax-effect',
		technologies: [
			{ id: uuid(), name: 'css' },
			{ id: uuid(), name: 'javascript' },
			{ id: uuid(), name: 'vite' },
		],
	},

	{
		id: uuid(),
		title: 'IP Tracker App',
		img: {
			src: '/img/ip-tracker.webp',
			alt: 'IP Tracker - Tool for finding server locations',
		},
		description:
			'Tracks the IP Address or Domain Name entered by fetching data from <strong>Ipify API</strong> and places a markup on its location using the coordinates returned, and a global map provided by <strong>Leaflet</strong>.',
		demo: 'https://realdiegor.github.io/ip_tracker/',
		source: 'https://github.com/realDiegoR/ip_tracker',
		technologies: [
			{ id: uuid(), name: 'html' },
			{ id: uuid(), name: 'css' },
			{ id: uuid(), name: 'javascript' },
		],
	},
];
