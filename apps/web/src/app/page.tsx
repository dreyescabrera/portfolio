import { Hero } from '@/components/hero';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Articles } from '../components/articles/articles';

export default function Home() {
	return (
		<div>
			<Hero />
			<main className="relative z-10 overflow-auto bg-white font-casual transition-colors duration-500 dark:bg-[#040c20]">
				<div className="m-auto w-11/12 max-w-6xl">
					<Projects />
					<Skills />
					<Articles />
					<Contact />
					<Footer />
				</div>
			</main>
		</div>
	);
}
