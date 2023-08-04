'use client';

import { useSidebarMobileContext } from '@/contexts/side-bar-mobile';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { Icon, IconType } from '../common';

type NavItemProps = {
	path: string;
	icon?: IconType;
	children: ReactNode;
};

export const NavItem = ({ path, children, icon }: NavItemProps) => {
	const { toggleSidebar } = useSidebarMobileContext();
	const pathname = usePathname();

	let activeTextStyles = '';
	let activeIconStyles = '';
	if (pathname === '/') {
		activeTextStyles = pathname === path ? 'text-lightGray' : 'hover:text-gray-200/60';
		activeIconStyles = pathname === path ? 'text-terciary' : '';
	} else {
		activeTextStyles = path.startsWith(pathname) ? 'text-lightGray' : 'hover:text-gray-200/60';
		activeIconStyles = path.startsWith(pathname) ? 'text-terciary' : '';
	}

	const closeSidebar = () => {
		if (document.documentElement.clientWidth < 768) {
			toggleSidebar();
		}
	};

	return (
		<Link
			href={path}
			className={`group flex items-center space-x-4 font-casual capitalize hover:transition-colors hover:duration-200 ${activeTextStyles}`}
			onClick={closeSidebar}
		>
			{icon && <Icon type={icon} styles={`w-6 mr-4 shrink-0 aspect-square ${activeIconStyles}`} />}
			<span className="">{children}</span>
		</Link>
	);
};
