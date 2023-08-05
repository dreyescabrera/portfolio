import { Hero } from '@/components/hero';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { ArticleList } from '../components/article-list/article-list';
import { PageWrapper } from '@/components/common';

export default function Home() {
	return (
		<>
			<Hero />
			<PageWrapper>
				<Projects />
				<Skills />
				<ArticleList limit={5} categories={['Software Engineering', 'Web Development']} />
				<Contact />
				<Footer />
			</PageWrapper>
		</>
	);
}
