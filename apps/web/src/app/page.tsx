import { Hero } from '@/components/hero';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { ArticleList } from '../components/article-list/article-list';

export default function Home() {
	return (
		<div>
			<Hero />
			<main className="relative z-10 overflow-auto bg-white font-casual transition-colors duration-500 dark:bg-[#040c20]">
				<div className="m-auto w-11/12 max-w-6xl">
					<Projects />
					<Skills />
					<ArticleList limit={5} categories={['Software Engineering', 'Web Development']} />
					<Contact />
					<Footer />
				</div>
			</main>
		</div>
	);
}
