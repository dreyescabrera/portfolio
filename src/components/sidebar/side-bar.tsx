import { ProfileImage } from '@/components/common/profile-image';
import { MediaButton } from './media-button';
import { ThemeSwitch } from './theme-switch';
import { NavItem } from './nav-item';
import { Icon, IconType } from '../common';
import { SectionId } from '@/hooks/use-intersection-observer';
import { navData } from '@/data/nav';
import { useEffect, useRef } from 'react';

type SidebarProps = {
	isOpen: boolean;
	toggleSidebar: () => void;
	activeNavItem: SectionId;
};

export const Sidebar = ({ isOpen, toggleSidebar, activeNavItem }: SidebarProps) => {
	const openStyles = isOpen ? 'translate-x-0' : '-translate-x-full';
	const sidebarStyles = useRef<string>(
		'fixed w-4/5 left-0 h-screen flex flex-col justify-start items-center px-6 py-8 gap-5 overflow-auto bg-black z-20 md:w-60 lg:w-72 2xl:w-1/6'
	);

	const addTransitions = () => {
		sidebarStyles.current += ' transition-transform duration-500';
	};

	return (
		<aside className={`${sidebarStyles.current} ${openStyles}`} onLoad={addTransitions}>
			<ProfileImage shape="circle" />
			<h2 className="text-3xl text-lightGray font-semibold font-luxury md:text-2xl 3xl:text-4xl">
				Diego Reyes
			</h2>
			<ul className="flex space-x-5">
				<MediaButton link="https://www.instagram.com/realdiegor/" socialMedia="instagram" />
				<MediaButton link="https://github.com/realDiegoR" socialMedia="github" />
				<MediaButton link="https://www.linkedin.com/in/diegoreyescabrera/" socialMedia="linkedin" />
			</ul>
			<nav className="pt-2 md:self-start lg:pt-8">
				<ul className="flex flex-col gap-5 text-midGray font-semibold tracking-wide text-lg md:text-xl md:gap-6 3xl:text-2xl">
					{navData.map(({ id, text, iconName }) => (
						<li key={id}>
							<NavItem id={id} callback={toggleSidebar}>
								<Icon
									type={iconName as IconType}
									styles={`w-6 aspect-square transition-colors duration-100 ${
										activeNavItem === id ? 'text-terciary' : ''
									}`}
								/>
								<span className={`${activeNavItem === id ? 'text-lightGray' : ''}`}>{text}</span>
							</NavItem>
						</li>
					))}
				</ul>
			</nav>
			<ThemeSwitch />
		</aside>
	);
};
