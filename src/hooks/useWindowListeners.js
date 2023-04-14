import { useState, useEffect } from "react";

export const useWindowListeners = () => {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(window.innerWidth >= 768);
	const removePreloader = () => {
		setTimeout(() => {
			console.log("DOM fully loaded and parsed");
			document.body.classList.remove("overflow-hidden");
			document
				.getElementById("preloader")
				.classList.replace("opacity-100", "opacity-0");
		}, 1000);
	};

	const toggleSidebar = () => {
		setSidebarIsOpen((prev) => !prev);
	};

	useEffect(() => {
		removePreloader();
		window.addEventListener("resize", (ev) => {
			setSidebarIsOpen(ev.target.innerWidth >= 768);
		});

		return () => {
			window.removeEventListener("resize", (ev) => {
				setSidebarIsOpen(ev.target.innerWidth >= 768);
			});
		};
	}, []);

	return { sidebarIsOpen, toggleSidebar };
};
