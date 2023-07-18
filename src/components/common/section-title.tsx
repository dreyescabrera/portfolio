import type { ReactNode } from 'react';

type SectionTitletProps = {
	variant?: 'h2' | 'h3';
	children: ReactNode;
};

export const SectionTitle = ({ variant = 'h2', children }: SectionTitletProps) => {
	switch (variant) {
		case 'h2':
			return (
				<h2 className="relative mb-8 text-primary dark:text-darkPrimary text-3xl font-bold font-luxury tracking-tight after:content[''] after:absolute after:-bottom-4 after:left-0 after:w-1/6 after:h-[.1875rem] after:rounded-full after:bg-secondary dark:after:bg-terciary xs:text-4xl lg:after:w-16 xl:tracking-normal transition-colors duration-500 after:transition-colors after:duration-500">
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 className="text-primary dark:text-darkPrimary font-bold text-2xl text-center tracking-tight xs:text-3xl transition-colors duration-500">
					{children}
				</h3>
			);
	}
};
