'use client';

import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { HamburgerButton } from '@/components/common/hamburger-button';
import { Sidebar } from '@/components/sidebar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
	const { activeNavItem, refs } = useIntersectionObserver();
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	const toggleSidebar = () => {
		setIsSidebarOpen((prev) => !prev);
	};

	return (
		<div className="grid grid-cols-[repeat(5,_1fr)] md:grid-cols-[1fr_3fr] xl:grid-cols-[2fr_9fr]">
			<div
				className={`z-20 col-start-1 col-end-5 row-span-full transition-transform duration-500 md:col-span-1 md:translate-x-0 md:transition-none ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<Sidebar toggleSidebar={toggleSidebar} activeNavItem={activeNavItem} />
			</div>
			<div className="col-span-full row-span-full md:col-auto">
				<Hero ref={refs.homeRef} />
				<main className="relative z-10 overflow-auto bg-white font-casual transition-colors duration-500 dark:bg-[#040c20]">
					<div className="m-auto w-11/12 max-w-6xl">
						<About ref={refs.whoamiRef} />
						<Skills />
						<Projects ref={refs.projectsRef} />
						<Contact ref={refs.contactRef} />
						<Footer />
					</div>
				</main>
			</div>
			<HamburgerButton isActive={isSidebarOpen} callback={toggleSidebar} />
		</div>
	);
}
