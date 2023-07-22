'use client';

import type { ReactNode } from 'react';

type NavItemProps = {
	id: string;
	callback?: () => void;
	children: ReactNode;
};

export const NavItem = ({ id, callback, children }: NavItemProps) => {
	const closeSidebar = () => {
		if (document.documentElement.clientWidth < 768) {
			callback && callback();
		}
	};
	return (
		<a
			href={'#' + id}
			className="flex items-center space-x-4 font-casual capitalize transition-colors duration-100"
			onClick={closeSidebar}
		>
			{children}
		</a>
	);
};
