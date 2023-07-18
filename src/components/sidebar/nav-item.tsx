'use client';

import { ReactNode } from 'react';

type NavItemProps = {
	id: string;
	callback?: () => void;
	children: ReactNode;
};

export const NavItem = ({ id, callback, children }: NavItemProps) => {
	const closeSidebar = () => {
		if (document.documentElement.clientWidth < 678) {
			callback && callback();
		}
	};
	return (
		<a
			href={'#' + id}
			className={`flex items-center space-x-4 capitalize font-casual transition-colors duration-100 `}
			onClick={closeSidebar}
		>
			{children}
		</a>
	);
};
