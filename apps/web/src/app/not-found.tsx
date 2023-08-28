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
				<SectionTitle>Oh. Seems like this page does not exist.</SectionTitle>
				<TextContent>
					If this is a high potential bug, please let me know as soon as possible.
				</TextContent>
				<AnchorButton href="/">Go to Homepage</AnchorButton>
			</PageSection>
		</PageWrapper>
	);
}

export const metadata: Metadata = {
	title: 'Page Not Found | Diego Reyes Cabrera',
};
