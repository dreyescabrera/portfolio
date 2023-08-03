'use client';

import { type ReactNode } from 'react';
import { SidebarMobileProvider } from '@/contexts/side-bar-mobile';
import { Sidebar } from '@/components/sidebar';
import { HamburgerButton } from '@/components/common/hamburger-button';

export const PageLayout = ({ children }: { children: ReactNode }) => {
	return (
		<SidebarMobileProvider>
			<div className="grid grid-cols-[repeat(5,_1fr)] md:grid-cols-[1fr_3fr] xl:grid-cols-[2fr_9fr]">
				<Sidebar />
				<div className="col-span-full row-span-full md:col-auto">{children}</div>
			</div>
			<HamburgerButton />
		</SidebarMobileProvider>
	);
};
