import { forwardRef } from "react";
import { SectionTitle } from "@common/SectionTitle";
import { TextContent } from "@common/TextContent";
import { ProfileImage } from "@common/ProfileImage";

export const About = forwardRef(function About(_, ref) {
	return (
		<section className="m-sm lg:m-lg" id="whoami?" ref={ref}>
			<SectionTitle text="Who Am I?" />

			<TextContent text="Hello, I'm Diego! I'm a Web Developer from Venezuela, currently located in Atlanta, USA." />
			<TextContent text="One year ago, I found a passion for developing when I took a course of JavaScript, as I was seeking a purpose that really catches me, facing my ever first algorithms, layouts and so on. Since then, I have been working on mastering my ability of solving user's problems with optimized and clean code within my web apps." />

			<section className="flex flex-col items-center gap-10 mt-8 lg:flex-row lg:justify-around xl:my-16">
				<ProfileImage shape="square" />

				<article className="space-y-4 max-w-lg">
					<h3 className="text-primary dark:text-darkPrimary font-bold text-2xl text-center tracking-tight xs:text-3xl transition-colors duration-500">
						Frontend Developer
					</h3>
					<TextContent
						bulleted
						text="Every day I am working on my side projects, currently focused on technologies such as JavaScript, ReactJS and Tailwind CSS, thinking how I can create a product you'd need or wish to have."
					/>
					<TextContent
						bulleted
						text="I am working on learning modern frontend frameworks, such as ReactJS and the libraries around it, soon to come the whole MERN Stack."
					/>
					<TextContent
						bulleted
						text="I develop highly efficient, responsive and performant websites and web apps, always keeping in mind the user experience and the impact it is having on my project. "
					/>
				</article>
			</section>
		</section>
	);
});
