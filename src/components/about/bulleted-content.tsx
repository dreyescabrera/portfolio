import type { ReactNode } from 'react';
import { Icon } from '@/components/common/icon';
import { TextContent } from '@/components/common/text-content';

type BulletedContentProps = {
	children: ReactNode;
};

export const BulletedContent = ({ children }: BulletedContentProps) => {
	return (
		<TextContent>
			<Icon
				type="arrowLeft"
				styles="relative -top-px w-4 h-4 inline-block text-primary dark:text-terciary mr-2"
			/>
			{children}
		</TextContent>
	);
};
