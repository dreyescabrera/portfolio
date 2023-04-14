import { useRef, useState, useEffect } from "react";

function useIntersectionObserver() {
	const homeRef = useRef(null);
	const whoamiRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	const [activeNavItem, setActiveNavItem] = useState(
		sessionStorage.activeNavItem ? sessionStorage.activeNavItem : "home"
	);

	const lightUpNavItem = (item) => {
		setActiveNavItem(item);
		sessionStorage.setItem("activeNavItem", item);
	};

	useEffect(() => {
		const options = {
			threshold: [0.25, 0.8], //0.25 for normal scroll, 0.8 for bugfixing on scrolling down to about section and not ever leaving home section entirely
		};

		const callback = (entries) => {
			const currentSection = entries[0];
			const intersectionRatio = currentSection.intersectionRatio;
			if (intersectionRatio > 0.25 && intersectionRatio < 0.6) {
				lightUpNavItem(currentSection.target.id);
				return;
			}
			if (intersectionRatio > 0.8) {
				//only for scrolling up to home section
				lightUpNavItem(currentSection.target.id);
			}
		};

		const observer = new IntersectionObserver(callback, options);
		observer.observe(homeRef.current);
		observer.observe(whoamiRef.current);
		observer.observe(projectsRef.current);
		observer.observe(contactRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return { activeNavItem, homeRef, whoamiRef, projectsRef, contactRef };
}

export { useIntersectionObserver };
