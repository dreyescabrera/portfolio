import { ProfileImage } from '@/components/common/profile-image';
import { MediaButton } from './media-button';
import { ThemeSwitch } from './theme-switch';
import { NavItem } from './nav-item';
import { Icon, IconType } from '../common';
import { SectionId } from '@/hooks/use-intersection-observer';
import { navData } from '@/data/nav';

type SidebarProps = {
	toggleSidebar: () => void;
	activeNavItem: SectionId;
};

export const Sidebar = ({ toggleSidebar, activeNavItem }: SidebarProps) => {
	return (
		<aside className="sticky top-0  flex h-screen flex-col items-center justify-start gap-5 overflow-auto bg-black px-6 py-8 transition-transform duration-500">
			<ProfileImage shape="circle" />
			<h2 className="font-luxury text-3xl font-bold text-lightGray md:text-2xl 3xl:text-4xl">
				Diego Reyes
			</h2>
			<ul className="flex space-x-5">
				<MediaButton link="https://www.instagram.com/realdiegor/" socialMedia="instagram" />
				<MediaButton link="https://github.com/realDiegoR" socialMedia="github" />
				<MediaButton link="https://www.linkedin.com/in/diegoreyescabrera/" socialMedia="linkedin" />
			</ul>
			<nav className="pt-2 md:self-start lg:pt-8">
				<ul className="flex flex-col gap-5 text-lg font-semibold tracking-wide text-midGray md:gap-6 md:text-xl 3xl:text-2xl">
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

export default Sidebar;
