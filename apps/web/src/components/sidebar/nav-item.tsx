'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebarMobileContext } from '@/contexts/side-bar-mobile';
import { Icon, type IconType } from '../common';
import type { ReactNode } from 'react';

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
	if (path === '/') {
		activeTextStyles = pathname === path ? 'text-lightGray' : 'hover:text-gray-200/60';
		activeIconStyles = pathname === path ? 'text-terciary' : '';
	} else {
		activeTextStyles = pathname.startsWith(path) ? 'text-lightGray' : 'hover:text-gray-200/60';
		activeIconStyles = pathname.startsWith(path) ? 'text-terciary' : '';
	}

	const closeSidebar = () => {
		if (document.documentElement.clientWidth < 768) {
			toggleSidebar();
		}
	};

	return (
		<Link
			href={path}
			className={`group inline-flex items-center font-casual capitalize hover:transition-colors hover:duration-200 ${activeTextStyles}`}
			onClick={closeSidebar}
		>
			{icon && (
				<Icon type={icon} styles={`w-6 2xl:w-7 mr-4 shrink-0 aspect-square ${activeIconStyles}`} />
			)}
			{children}
		</Link>
	);
};
