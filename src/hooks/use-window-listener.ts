'use client';

import { useState, useEffect } from 'react';

export const useWindowListeners = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	const toggleSidebar = () => {
		setIsSidebarOpen((prev) => !prev);
	};

	const autoToggleSidebar = () => {
		if (innerWidth >= 700 && innerWidth <= 940) setIsSidebarOpen(innerWidth >= 768);
	};

	useEffect(() => {
		setIsSidebarOpen(innerWidth >= 768);
		window.addEventListener('resize', autoToggleSidebar);

		return () => {
			window.removeEventListener('resize', () => autoToggleSidebar);
		};
	}, []);

	return { isSidebarOpen, toggleSidebar };
};
