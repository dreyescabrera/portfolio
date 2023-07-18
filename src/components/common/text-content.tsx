import type { ReactNode } from 'react';

type TextContentProps = {
	children: ReactNode;
};

export const TextContent = ({ children }: TextContentProps) => {
	return (
		<p className="mb-4 text-black xs:text-lg xl:text-xl dark:text-lightGray transition-colors duration-500">
			{children}
		</p>
	);
};
