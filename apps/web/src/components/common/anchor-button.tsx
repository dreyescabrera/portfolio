import Link from 'next/link';
import type { ReactNode, AnchorHTMLAttributes } from 'react';

type NativeAnchor = AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonVariant = 'primary' | 'secondary';

interface LinkProps extends NativeAnchor {
	children: ReactNode;
	variant?: ButtonVariant;
}

export const primaryColors =
	'bg-secondary text-white border-2 border-transparent hover:bg-primary dark:text-primary dark:bg-darkPrimary dark:hover:bg-lightGray';
export const secondaryColors =
	'text-terciary border-terciary border-2 hover:bg-quintenary dark:hover:bg-[rgba(51,101,176,0.3)]  dark:text-lightGray dark:border-darkSecondary';

export const AnchorButton = ({ href, variant = 'primary', children, ...rest }: LinkProps) => {
	const colors = variant === 'primary' ? primaryColors : secondaryColors;

	return (
		<Link
			href={href as string}
			{...rest}
			className={`${colors} inline-block
       rounded-sm px-4 py-2 text-sm transition-colors duration-200 xs:text-base lg:px-3 lg:text-base`}
		>
			{children}
		</Link>
	);
};
