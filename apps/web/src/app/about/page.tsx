import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { ArticleList } from '@/components/article-list';
import { PageWrapper } from '@/components/common';

export default function Home() {
	return (
		<PageWrapper>
			<About />
			<Skills />
			<ArticleList limit={5} categories={['Adventures & Learnings', 'Growth & Reflections']} />
			<Contact />
			<Footer />
		</PageWrapper>
	);
}
