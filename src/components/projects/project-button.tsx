import type { ReactNode } from 'react';

type ProjectButtonProps = {
	link: string;
	children: ReactNode;
	variant?: 'call-to-action' | 'regular';
};

export const ProjectButton = ({ link, variant = 'regular', children }: ProjectButtonProps) => {
	const ctaColors =
		'bg-secondary text-white border-2 border-transparent hover:bg-primary dark:text-primary dark:bg-darkPrimary dark:hover:bg-lightGray';
	const regularColors =
		'text-terciary border-terciary border-2 hover:bg-quintenary dark:hover:bg-[rgba(51,101,176,0.3)]  dark:text-lightGray dark:border-darkSecondary';
	const colors = variant === 'call-to-action' ? ctaColors : regularColors;

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={`${colors} rounded-sm px-4 py-2 text-sm transition-colors duration-200 xs:text-base lg:px-3 lg:text-base`}
		>
			{children}
		</a>
	);
};
