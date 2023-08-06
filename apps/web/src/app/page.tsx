import { Hero } from '@/components/hero';
import { Skills } from '@/components/skills';
import { ProjectGrid } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { ArticleList } from '../components/article-list/article-list';
import { PageSection, PageWrapper, SectionTitle, TextContent } from '@/components/common';

export default function Home() {
	return (
		<>
			<Hero />
			<PageWrapper>
				<PageSection>
					<SectionTitle>Work I've Done</SectionTitle>
					<ProjectGrid />
				</PageSection>
				<Skills />
				<PageSection>
					<SectionTitle>I like to share my experience</SectionTitle>
					<TextContent>
						I would be more than glad if I help someone throughout what I can share. I love to help
						people the way I would have loved to be helped <i>(still today!)</i>. Check out my blog
						and don't be afraid to ask.
					</TextContent>
					<ArticleList limit={5} categories={['Software Engineering', 'Web Development']} />
				</PageSection>
				<Contact />
				<Footer />
			</PageWrapper>
		</>
	);
}
