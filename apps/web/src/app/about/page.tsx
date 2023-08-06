import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { ArticleList } from '@/components/article-list';
import { PageSection, PageWrapper, SectionTitle, TextContent } from '@/components/common';

export default function Home() {
	return (
		<PageWrapper>
			<About />
			<Skills />
			<PageSection>
				<SectionTitle>Sharing My Adventures with You</SectionTitle>
				<TextContent>
					This is not just is about work and code. We're all human, and our life journeys are
					priceless. Here, I've written down some of the most important lessons and insights I've
					learned as I look back on my growth over the years.
				</TextContent>
				<ArticleList limit={5} categories={['Adventures & Learnings', 'Growth & Reflections']} />
			</PageSection>
			<Contact />
		</PageWrapper>
	);
}
