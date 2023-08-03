'use client';

import { useSidebarMobileContext } from '@/contexts/side-bar-mobile';
import type { ReactNode } from 'react';

type NavItemProps = {
	id: string;
	children: ReactNode;
};

export const NavItem = ({ id, children }: NavItemProps) => {
	const { toggleSidebar } = useSidebarMobileContext();

	const closeSidebar = () => {
		if (document.documentElement.clientWidth < 768) {
			toggleSidebar();
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
