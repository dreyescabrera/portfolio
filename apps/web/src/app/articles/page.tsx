import { ArticleList } from '@/components/article-list';
import { PageSection, PageWrapper, SectionTitle, TextContent } from '@/components/common';
import { Footer } from '@/components/footer';

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
			<PageSection>
				<div className="flex justify-between border-b-2 border-secondary/30">
					<span>
						<SectionTitle variant="h3">Filter by category</SectionTitle>
					</span>
					<div className="flex">
						<button className="hover relative top-[1px] block w-16 border-b-2 border-b-secondary">
							All
						</button>
						<button className="hover relative top-[1px] block w-16 border-b-2 border-b-transparent">
							Foo
						</button>
						<button className="hover relative top-[1px] block w-16 border-b-2 border-b-transparent">
							Bar
						</button>
						<button className="hover relative top-[1px] block w-16 border-b-2 border-b-transparent">
							Baz
						</button>
					</div>
				</div>
				<ArticleList showSeeAll={false} />
			</PageSection>
			<Footer />
		</PageWrapper>
	);
}
