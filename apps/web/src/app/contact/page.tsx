import { Contact } from '@/components/contact';
import { PageWrapper } from '@/components/common';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
};

export default function ContactPage() {
	return (
		<PageWrapper>
			<Contact />
		</PageWrapper>
	);
}
