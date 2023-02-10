import ipTrackerImg from "./../assets/img/ip-tracker.webp";
import toDoAppImg from "./../assets/img/todo-app.webp";
import countryQuizImg from "./../assets/img/quiz-game.webp";
import portfolioImg from "./../assets/img/portfolio.webp";
import facenoteImg from "./../assets/img/facenote.webp";

const projects = [
	{
		id: 1,
		title: "IP Tracker App",
		img: {
			src: ipTrackerImg,
			alt: "IP Tracker - Tool for finding server locations",
		},
		description:
			"Tracks the IP Address or Domain Name entered by fetching data from <strong>Ipify API</strong> and places a markup on its location using the coordinates returned, and a global map provided by <strong>Leaflet</strong>.",
		demo: "https://realdiegor.github.io/ip_tracker/",
		source: "https://github.com/realDiegoR/ip_tracker",
		technologies: [
			{ id: 1, name: "html" },
			{ id: 2, name: "css" },
			{ id: 3, name: "javascript" },
		],
	},
	{
		id: 2,
		title: "ToDo App",
		img: {
			src: toDoAppImg,
			alt: "Todo App - An app for managing your daily goals",
		},
		description:
			"Manage your daiy tasks by creating, marking as checked, filtering and deleting ToDo's. This app features fetching from <strong>LocalStorage</strong> and multiple tabs synchronization.",
		demo: "https://realdiegor.github.io/Todo-App-React/",
		source: "https://github.com/realDiegoR/Todo-App-React",
		technologies: [
			{ id: 1, name: "react" },
			{ id: 2, name: "sass" },
		],
	},
	{
		id: 3,
		title: "Country Quiz",
		img: {
			src: countryQuizImg,
			alt: "Country Quiz - A Game for those who love geography ",
		},
		description:
			"Fetches the data it needs from the <strong>REST Countries API</strong>. It chooses a question and a country, three thinkfully wrong options and the correct one among the others.",
		demo: "https://realdiegor.github.io/Country-quiz/",
		source: "https://github.com/realDiegoR/Country-quiz",
		technologies: [
			{ id: 1, name: "html" },
			{ id: 2, name: "css" },
			{ id: 3, name: "javascript" },
		],
	},
	{
		id: 4,
		title: "Portfolio",
		img: {
			src: portfolioImg,
			alt: "Personal website that showcases my professional skills.",
		},
		description:
			"My personal and professional skills and progress. It features an amazing <strong>chat-like animation</strong> made with JavaScript, applying <strong>recursion</strong> on a tree data structure.",
		demo: "https://www.realdiegor.dev/",
		source: "https://github.com/realDiegoR/portfolio",
		technologies: [
			{ id: 1, name: "react" },
			{ id: 2, name: "tailwind" },
			{ id: 3, name: "vite" },
		],
	},
	{
		id: 5,
		title: "Facenote",
		img: {
			src: facenoteImg,
			alt: "Facenote, a landing page with parallax effect",
		},
		description:
			"Generates a random set of icons in the background that move at different speed with <strong>parallax effect</strong>. It also features a clean responsive design and navigation bar.",
		demo: "https://realdiegor.github.io/parallax-effect/",
		source: "https://github.com/realDiegoR/parallax-effect",
		technologies: [
			{ id: 1, name: "css" },
			{ id: 2, name: "javascript" },
			{ id: 3, name: "vite" },
		],
	},
];

export default projects;
