import { useState, useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { HamburguerButton } from "../common/HamburguerButton";
import { SidebarMenu } from "../SidebarMenu/SidebarMenu";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer";
import { NavItem } from "../SidebarMenu/NavItem/NavItem";

function App() {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(window.innerWidth >= 768);

	useEffect(() => {
		window.addEventListener("resize", (ev) => {
			setSidebarIsOpen(ev.target.innerWidth >= 768);
		});
	}, []);

	const { activeNavItem, homeRef, whoamiRef, projectsRef, contactRef } =
		useIntersectionObserver();

	return (
		<>
			<SidebarMenu
				renderNavItem={({ id, name, iconName }) => (
					<NavItem
						id={id}
						name={name}
						iconName={iconName}
						activeNavItem={activeNavItem}
						setSidebarIsOpen={setSidebarIsOpen}
					/>
				)}
				sidebarIsOpen={sidebarIsOpen}
			/>
			<HamburguerButton
				sidebarIsOpen={sidebarIsOpen}
				setSidebarIsOpen={setSidebarIsOpen}
			/>
			<div className="transition-[padding_,background] duration-[700ms_,500ms] md:pl-60 lg:pl-72">
				<Hero
					sidebarIsOpen={sidebarIsOpen}
					setSidebarIsOpen={setSidebarIsOpen}
					refference={homeRef}
				/>
				<main className="relative bg-white dark:bg-[#040c20] z-10 font-casual overflow-auto transition-colors duration-500">
					<div className="w-11/12 max-w-6xl m-auto">
						<About refference={whoamiRef} />
						<Skills />
						<Projects refference={projectsRef} />
						<Contact refference={contactRef} />
						<Footer />
					</div>
				</main>
			</div>
		</>
	);
}

export { App };
