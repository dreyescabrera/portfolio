import type { ReactNode } from 'react';

type TextContentProps = {
	children: ReactNode;
};

export const TextContent = ({ children }: TextContentProps) => {
	return (
		<p className="mb-4 text-black transition-colors duration-500 dark:text-lightGray xs:text-lg xl:text-xl">
			{children}
		</p>
	);
};
