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
				<ul className="xl:w-2/3 grid grid-cols-[repeat(auto-fit,_minmax(6rem,_7rem))] gap-8 justify-center">
					{skills.map((skill) => (
						<SkillsItem name={skill.name} iconName={skill.iconName as IconType} key={skill.id} />
					))}
				</ul>
			</div>
		</section>
	);
}

export const SkillsItem = ({ name, iconName }: SkillsItemProps) => {
	return (
		<li className="flex flex-col w-24 h-28 p-2 justify-center items-center gap-1 text-center shadow-md dark:bg-quaternary dark:text-white lg:w-28 lg:h-32 transition-colors duration-500">
			<Icon type={iconName} styles="w-14 h-14 lg:w-16 lg:h-16" />
			<span className="text-black tracking-wide leading-5 font-luxury dark:text-lightGray transition-colors duration-500">
				{name}
			</span>
		</li>
	);
};
