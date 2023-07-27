import { SectionTitle } from '@/components/common/section-title';
import { TextContent } from '@/components/common/text-content';
import { skills } from '@/data/skills';
import { Icon, IconType } from '@/components/common/icon';

type SkillsItemProps = {
	name: string;
	iconName: IconType;
};

export function Skills() {
	return (
		<section className="m-sm lg:m-lg">
			<SectionTitle>Skills</SectionTitle>
			<div className="flex flex-col gap-6 xl:flex-row">
				<div className="xl:w-1/3">
					<TextContent>
						I have managed to gather these skills through all my never-ending process as a
						self-taught developer, deepening on them for being able of provide the appropriate
						solution to a problem.
					</TextContent>
				</div>
				<ul className="grid grid-cols-[repeat(auto-fit,_minmax(6rem,_7rem))] justify-center gap-8 xl:w-2/3">
					{skills.map((skill) => (
						<SkillsItem name={skill.name} iconName={skill.iconName} key={skill.id} />
					))}
				</ul>
			</div>
		</section>
	);
}

export const SkillsItem = ({ name, iconName }: SkillsItemProps) => {
	return (
		<li className="flex h-28 w-24 flex-col items-center justify-center gap-1 p-2 text-center shadow-md transition-colors duration-500 dark:bg-quaternary dark:text-white lg:h-32 lg:w-28">
			<Icon type={iconName} styles="w-14 h-14 lg:w-16 lg:h-16" />
			<span className="font-luxury leading-5 tracking-wide text-black transition-colors duration-500 dark:text-lightGray">
				{name}
			</span>
		</li>
	);
};
