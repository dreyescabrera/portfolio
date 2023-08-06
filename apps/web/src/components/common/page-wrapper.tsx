import type { ReactNode } from 'react';
import { Footer } from '@/components/footer';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<main className="relative z-10 overflow-auto bg-white font-casual transition-colors duration-500 dark:bg-[#040c20]">
			<div className="m-auto flex min-h-screen w-11/12 max-w-6xl flex-col">
				{children}
				<Footer />
			</div>
		</main>
	);
};
