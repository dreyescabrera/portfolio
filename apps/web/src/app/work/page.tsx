import { ProjectGrid } from '@/components/projects';
import { PageSection, PageWrapper, SectionTitle } from '@/components/common';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Work I've Done",
};

export default function WorkPage() {
	return (
		<PageWrapper>
			<PageSection>
				<SectionTitle>Work I&apos;ve Done</SectionTitle>
				<ProjectGrid />
			</PageSection>
		</PageWrapper>
	);
}
