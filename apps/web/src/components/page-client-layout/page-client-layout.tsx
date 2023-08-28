'use client';

import { useState, type ReactNode, useEffect } from 'react';
import { HamburgerButton } from '@/components/common/hamburger-button';
import { usePathname } from 'next/navigation';

type PageClientLayoutProps = {
	children: ReactNode;
	renderSidebar: ReactNode;
};

export const PageClientLayout = ({ children, renderSidebar }: PageClientLayoutProps) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	const pathname = usePathname();

	function toggleSidebar() {
		setIsSidebarOpen((prev) => !prev);
	}

	useEffect(() => {
		setIsSidebarOpen(false);
	}, [pathname]);

	return (
		<>
			<div className="grid grid-cols-[repeat(5,_1fr)] md:grid-cols-[1fr_3fr] xl:grid-cols-[2fr_9fr]">
				<div
					className={`sticky left-0 top-0 z-20 col-start-1 col-end-5 row-span-full h-screen transition-transform duration-500 md:col-span-1 md:translate-x-0  md:transition-none ${
						isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
					}`}
				>
					{renderSidebar}
				</div>
				<div className="col-span-full row-span-full md:col-auto">{children}</div>
			</div>
			<HamburgerButton toggleSidebar={toggleSidebar} isActive={isSidebarOpen} />
		</>
	);
};
