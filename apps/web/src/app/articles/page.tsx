import { ArticleListWithFilter } from '@/components/article-list';
import { PageSection, PageWrapper, SectionTitle, TextContent } from '@/components/common';

export default function ArticleHomePage() {
	return (
		<PageWrapper>
			<PageSection>
				<SectionTitle>Articles I&apos;ve Written</SectionTitle>
				<TextContent>
					Journalism of my experience creating efficient products while, ironically, learning to
					make them efficient. I try to materialize my knowledge to others, the way I would wanted
					to learn it.
				</TextContent>
			</PageSection>
			<ArticleListWithFilter />
		</PageWrapper>
	);
}