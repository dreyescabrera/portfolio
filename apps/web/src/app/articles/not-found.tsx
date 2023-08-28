import {
	AnchorButton,
	PageSection,
	PageWrapper,
	SectionTitle,
	TextContent,
} from '@/components/common';
import type { Metadata } from 'next';

export default function GlobalNotFound() {
	return (
		<PageWrapper>
			<PageSection>
				<SectionTitle>Oh. Seems like this article has yet to be written.</SectionTitle>
				<TextContent>
					If this is a high potential bug, please let me know as soon as possible.
				</TextContent>
				<TextContent>
					<span className="text-sm text-gray-600 dark:text-gray-400 xs:text-base lg:text-lg">
						... If you want me to write an article about this, let me know even sooner!
					</span>
				</TextContent>
				<AnchorButton href="/">Go to Homepage</AnchorButton>
			</PageSection>
		</PageWrapper>
	);
}

export const metadata: Metadata = {
	title: 'Article Not Found | Diego Reyes Cabrera',
};
