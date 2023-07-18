'use client';

import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { HamburguerButton } from '@/components/common/hamburger-button';
import { Sidebar } from '@/components/sidebar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { useWindowListeners } from '@/hooks/use-window-listener';

export default function Home() {
	const { activeNavItem, refs } = useIntersectionObserver();
	const { isSidebarOpen, toggleSidebar } = useWindowListeners();

	return (
		<>
			<Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} activeNavItem={activeNavItem} />
			<div className="transition-[padding_,background] duration-[700ms_,500ms] md:pl-60 lg:pl-72">
				<Hero ref={refs.homeRef} />
				<main className="relative bg-white dark:bg-[#040c20] z-10 font-casual overflow-auto transition-colors duration-500">
					<div className="w-11/12 max-w-6xl m-auto">
						<About ref={refs.whoamiRef} />
						<Skills />
						<Projects ref={refs.projectsRef} />
						<Contact ref={refs.contactRef} />
						<Footer />
					</div>
				</main>
			</div>
			<HamburguerButton isActive={isSidebarOpen} callback={toggleSidebar} />
		</>
	);
}
