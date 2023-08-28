import { ProfileImage } from '@/components/common/profile-image';
import { MediaButton } from './media-button';
import { ThemeSwitch } from './theme-switch';
import { NavItem } from './nav-item';
import { getCookieTheme } from '@/utils';
import { navData } from '@/data/nav';

export const Sidebar = () => {
	const theme = getCookieTheme();

	return (
		<aside className="flex h-full flex-col items-center justify-start gap-5 overflow-auto bg-black px-6 py-8">
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
			<ThemeSwitch initialTheme={theme} />
		</aside>
	);
};

export default Sidebar;
