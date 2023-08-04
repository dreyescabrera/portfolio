import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { ArticleList } from '@/components/article-list';

export default function Home() {
	return (
		<main className="relative z-10 overflow-auto bg-white font-casual transition-colors duration-500 dark:bg-[#040c20]">
			<div className="m-auto w-11/12 max-w-6xl">
				<About />
				<Skills />
				<ArticleList limit={5} categories={['Adventures & Learnings', 'Growth & Reflections']} />
				<Contact />
				<Footer />
			</div>
		</main>
	);
}
