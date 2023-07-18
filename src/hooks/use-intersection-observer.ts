'use client';

import { useRef, useState, useEffect } from 'react';

export type SectionId = 'home' | 'whoami' | 'projects' | 'contact';

export function useIntersectionObserver() {
	const [activeNavItem, setActiveNavItem] = useState<SectionId>('home');
	const homeRef = useRef<HTMLDivElement>(null);
	const whoamiRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const lightUpNavItem = (item: SectionId) => {
		setActiveNavItem(item);
		sessionStorage.setItem('activeNavItem', item);
	};

	useEffect(() => {
		const sessionActiveNavItem = sessionStorage.getItem('activeNavItem');
		if (sessionActiveNavItem) setActiveNavItem(sessionActiveNavItem as SectionId);

		const options = {
			delay: 300,
			threshold: [0.2, 0.5, 0.8],
			rootMargin: '-20px 0px 0px 0px',
		};

		const callback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					lightUpNavItem(entry.target.id as SectionId);
				}
			});
		};

		const observer = new IntersectionObserver(callback, options);
		observer.observe(homeRef.current as Element);
		observer.observe(whoamiRef.current as Element);
		observer.observe(projectsRef.current as Element);
		observer.observe(contactRef.current as Element);

		return () => {
			observer.disconnect();
		};
	}, []);

	return {
		activeNavItem,
		refs: {
			homeRef,
			whoamiRef,
			projectsRef,
			contactRef,
		},
	};
}
