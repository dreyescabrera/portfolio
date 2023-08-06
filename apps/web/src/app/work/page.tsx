import { Footer } from '@/components/footer';
import { ProjectGrid } from '@/components/projects';
import React from 'react';
import { PageSection, PageWrapper, SectionTitle } from '@/components/common';

export default function WorkPage() {
	return (
		<PageWrapper>
			<PageSection>
				<SectionTitle>Work I've Done</SectionTitle>
				<ProjectGrid />
			</PageSection>
			<Footer />
		</PageWrapper>
	);
}
