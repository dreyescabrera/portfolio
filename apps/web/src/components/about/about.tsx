import { PageSection, SectionTitle } from '@/components/common/';
import { TextContent } from '@/components/common/';
import { BulletedContent } from './bulleted-content';
import { ProfileImage } from '@/components/common/';

export function About() {
	return (
		<PageSection>
			<SectionTitle>Who Am I?</SectionTitle>
			<TextContent>
				Hello, I&apos;m Diego! I&apos;m a Web Developer from Venezuela, currently located in
				Atlanta, USA.
			</TextContent>
			<TextContent>
				I am passionate about turning ideas into usable and efficient products through software.
				Every day I prepare myself 1% more to be able to deliver a product that exceeds user
				expectations, while adhering to best practices and principles of software maintainability
				and scalability.
			</TextContent>

			<section className="mt-8 flex flex-col items-center gap-10 lg:flex-row lg:justify-around">
				<ProfileImage shape="square" />

				<article className="flex max-w-lg flex-col items-center space-y-4 ">
					<SectionTitle variant="h3">Frontend Developer</SectionTitle>
					<BulletedContent>
						Every day I am working on my side projects, currently focused on technologies such as
						TypeScript, Next.js and Tailwind CSS, thinking how I can create a product you&apos;d
						need or wish to have.
					</BulletedContent>
					<BulletedContent>
						I am working on learning modern frontend frameworks, such as ReactJS and the libraries
						around it.
					</BulletedContent>
					<BulletedContent>
						I develop highly efficient, responsive and performant websites and web apps, always
						keeping in mind the user experience and the impact it is having on my project.
					</BulletedContent>
				</article>
			</section>
		</PageSection>
	);
}
