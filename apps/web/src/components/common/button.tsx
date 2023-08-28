'use client';

import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { primaryColors, secondaryColors, type ButtonVariant } from './anchor-button';

type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends HTMLButtonProps {
	children: ReactNode;
	variant?: ButtonVariant;
}

export const Button = ({ variant = 'primary', children, ...HTMLButtonProps }: ButtonProps) => {
	const colors = variant === 'primary' ? primaryColors : secondaryColors;
	return (
		<button
			className={`${colors} rounded-sm px-4 py-2 text-sm transition-colors duration-200 xs:text-base lg:px-3 lg:text-base`}
			{...HTMLButtonProps}
		>
			{children}
		</button>
	);
};
