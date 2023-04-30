import { useRef, useState, useEffect } from "react";

function useIntersectionObserver() {
	const [activeNavItem, setActiveNavItem] = useState(
		sessionStorage.getItem("activeNavItem") || "home"
	);
	const homeRef = useRef(null);
	const whoamiRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	const lightUpNavItem = (item) => {
		setActiveNavItem(item);
		sessionStorage.setItem("activeNavItem", item);
	};

	useEffect(() => {
		const options = {
			delay: 300,
			threshold: [0.2, 0.5, 0.8],
			rootMargin: "-20px 0px 0px 0px",
		};

		const callback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					lightUpNavItem(entry.target.id);
				}
			});
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
