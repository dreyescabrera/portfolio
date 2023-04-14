import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { useWindowListeners } from "@hooks/useWindowListeners";
import { HamburguerButton } from "@common/HamburguerButton";
import { SidebarMenu } from "@components/SidebarMenu/SidebarMenu";
import { Hero } from "@components/Hero/Hero";
import { About } from "@components/About/About";
import { Skills } from "@components/Skills/Skills";
import { Projects } from "@components/Projects/Projects";
import { Contact } from "@components/Contact/Contact";
import { Footer } from "@components/Footer/Footer";
import { NavItem } from "@components/SidebarMenu/NavItem/NavItem";

export const App = () => {
	const { sidebarIsOpen, toggleSidebar } = useWindowListeners();
	const { activeNavItem, homeRef, whoamiRef, projectsRef, contactRef } =
		useIntersectionObserver();

	return (
		<>
			<SidebarMenu
				isActive={sidebarIsOpen}
				renderNavItem={({ id, text, iconName }) => (
					<NavItem
						id={id}
						text={text}
						iconName={iconName}
						isActive={activeNavItem === id}
						callback={toggleSidebar}
					/>
				)}
			/>
			<div className="transition-[padding_,background] duration-[700ms_,500ms] md:pl-60 lg:pl-72">
				<Hero ref={homeRef} />
				<main className="relative bg-white dark:bg-[#040c20] z-10 font-casual overflow-auto transition-colors duration-500">
					<div className="w-11/12 max-w-6xl m-auto">
						<About ref={whoamiRef} />
						<Skills />
						<Projects ref={projectsRef} />
						<Contact ref={contactRef} />
						<Footer />
					</div>
				</main>
			</div>
			<HamburguerButton isActive={sidebarIsOpen} callback={toggleSidebar} />
		</>
	);
};
