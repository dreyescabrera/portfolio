import type { ReactNode } from 'react';

export const PageSection = ({ children }: { children: ReactNode }) => {
	return <section className="my-12 lg:my-24 lg:first:mt-12">{children}</section>;
};
