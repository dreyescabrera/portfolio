import type { ReactNode } from 'react';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<main className="relative z-10 overflow-auto bg-white font-casual transition-colors duration-500 dark:bg-[#040c20]">
			<div className="m-auto w-11/12 max-w-6xl">{children}</div>
		</main>
	);
};
