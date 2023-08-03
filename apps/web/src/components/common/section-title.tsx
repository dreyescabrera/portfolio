import type { ReactNode } from 'react';

type SectionTitletProps = {
	variant?: 'h2' | 'h3';
	children: ReactNode;
};

export const SectionTitle = ({ variant = 'h2', children }: SectionTitletProps) => {
	switch (variant) {
		case 'h2':
			return (
				<h2 className="after:content[''] relative mb-8 font-luxury text-3xl font-bold tracking-tight text-primary transition-colors duration-500 after:absolute after:-bottom-4 after:left-0 after:h-[.1875rem] after:w-1/6 after:rounded-full after:bg-secondary after:transition-colors after:duration-500 dark:text-darkPrimary dark:after:bg-terciary xs:text-4xl lg:after:w-16 xl:tracking-normal">
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 className="text-center text-2xl font-semibold tracking-tight text-primary transition-colors duration-500 dark:text-darkPrimary xs:text-3xl">
					{children}
				</h3>
			);
	}
};
