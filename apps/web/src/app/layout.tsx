import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { PageLayout } from '@/components/page-layout';
import { Raleway, Outfit } from 'next/font/google';
import type { Metadata } from 'next';
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
		template: '%s | Diego Reyes Cabrera',
		default: 'Diego Reyes Cabrera',
	},
	description:
		"Hello, I'm Diego! I'm a Web Developer from Venezuela, currently located in Atlanta, USA.",
	openGraph: {
		title: 'Diego Reyes Cabrera - Frontend developer',
		description:
			"Hello, I'm Diego! I'm a Web Developer from Venezuela, currently located in Atlanta, USA.",
		url: 'https://realdiegor.dev',
		images: [
			{
				url: 'https://res.cloudinary.com/djvydqyun/image/upload/v1692326227/hero_189kb_z22mec.jpg',
				width: 1920,
				height: 1280,
				alt: 'Portfolio Hero',
			},
		],
		type: 'website',
		siteName: 'Diego Reyes Cabrera - Frontend developer',
		locale: 'en_US',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			style={{ scrollbarGutter: 'stable' }}
			lang="en"
			className={`${outfit.variable} ${raleway.variable}`}
		>
			<GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID as string} />
			<body>
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	);
}
