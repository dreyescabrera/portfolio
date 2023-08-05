import { Footer } from '@/components/footer';
import { Projects } from '@/components/projects';
import React from 'react';
import { PageWrapper } from '@/components/common';

export default function WorkPage() {
	return (
		<PageWrapper>
			<Projects />
			<Footer />
		</PageWrapper>
	);
}
