import { ProfileImage } from '@/components/common/profile-image';
import { MediaButton } from './media-button';
import { ThemeSwitch } from './theme-switch';
import { NavItem } from './nav-item';
import { navData } from '@/data/nav';
import { useSidebarMobileContext } from '@/contexts/side-bar-mobile';

export const Sidebar = () => {
	const { isSidebarOpen } = useSidebarMobileContext();

	return (
		<aside
			className={`sticky top-0 z-20 col-start-1 col-end-5 row-span-full flex h-screen flex-col items-center justify-start gap-5 overflow-auto bg-black px-6 py-8 transition-transform duration-500 md:col-span-1 md:translate-x-0 md:transition-none ${
				isSidebarOpen ? 'translate-x-0' : '-translate-x-full '
			}`}
		>
			<ProfileImage shape="circle" />
			<h2 className="font-luxury text-3xl font-bold text-lightGray md:text-2xl 2xl:text-3xl 3xl:text-5xl">
				Diego Reyes
			</h2>
			<ul className="flex space-x-5">
				<MediaButton link="https://www.instagram.com/realdiegor/" socialMedia="instagram" />
				<MediaButton link="https://github.com/realDiegoR" socialMedia="github" />
				<MediaButton link="https://www.linkedin.com/in/diegoreyescabrera/" socialMedia="linkedin" />
			</ul>
			<nav className="pt-2 md:self-start lg:pt-8">
				<ul className="flex flex-col gap-5 text-lg font-semibold tracking-wide text-midGray md:text-xl  3xl:text-2xl">
					{navData.map(({ path, text, iconName }) => (
						<li key={path}>
							<NavItem path={path} icon={iconName}>
								{text}
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
