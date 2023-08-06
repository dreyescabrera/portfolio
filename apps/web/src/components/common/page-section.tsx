import type { ReactNode } from 'react';

export const PageSection = ({ children }: { children: ReactNode }) => {
	return <section className="my-8 lg:my-12 ">{children}</section>;
};
