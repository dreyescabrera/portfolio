import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { Raleway, Outfit } from 'next/font/google';
import { type Metadata } from 'next';
import './globals.css';

const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

const raleway = Raleway({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-raleway',
});

const outfit = Outfit({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-outfit',
});

export const metadata: Metadata = {
	title: {
		template: '%s | realdiegor',
		default: 'realdiegor | portfolio',
	},
	description:
		"Hello, I'm Diego! I'm a Web Developer from Venezuela, currently located in Atlanta, USA.",
	openGraph: {
		title: 'realdiegor | portfolio',
		description:
			"Hello, I'm Diego! I'm a Web Developer from Venezuela, currently located in Atlanta, USA.",
		url: 'https://realdiegor.dev',
		images: [
			{
				url: 'https://raw.githubusercontent.com/realDiegoR/portfolio/master/public/img/hero-desktop.webp',
				width: 1200,
				height: 630,
				alt: 'Portfolio Hero',
			},
		],
		type: 'website',
		siteName: 'realdiegor | portfolio',
		locale: 'en_US',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${outfit.variable} ${raleway.variable}`}>
			<GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID as string} />
			<body>{children}</body>
		</html>
	);
}
