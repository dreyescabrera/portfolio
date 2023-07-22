import Image from 'next/image';
import { forwardRef } from 'react';
import { HeroButtton } from './hero-button';
import { ScrollButton } from './scroll-button';
import { useInteractiveText } from '@/hooks/use-interactive-text';
// import mobileAvif from '@assets/hero/hero_mobile.avif';
// import tabletAvif from '@assets/hero/hero_tablet.avif';
// import tabletWebp from '@assets/hero/hero_tablet.webp';
// import desktopAvif from '@assets/hero/hero_desktop.avif';
import mobileWebp from '/public/hero/hero-mobile.webp';
import desktopWebp from '/public/hero/hero-desktop.webp';

export const Hero = forwardRef<HTMLDivElement>(function Hero(props, ref) {
	const { textValue, textChanging, dialogueStatus, answerQuestion, onStartOver, onDelete } =
		useInteractiveText();
	return (
		<section
			id="home"
			className="relative grid h-screen w-full grid-cols-6 grid-rows-5 justify-items-center font-luxury text-quaternary "
			ref={ref}
		>
			<picture className="fixed -z-10 h-screen w-full">
				<source
					srcSet={mobileWebp.src}
					width={800}
					height={1200}
					media="(max-width: 768px)"
					className="h-full w-full object-cover object-center"
				/>
				<Image
					src={desktopWebp}
					alt="background"
					priority
					className="h-full object-cover object-center"
					placeholder="blur"
				/>
			</picture>
			<div className="col-span-full row-start-2 space-y-3 tracking-tight sm:space-y-4 lg:col-end-6 xl:col-end-5">
				<h1 className="mb-1 text-4xl font-bold antialiased xs:text-5xl sm:text-6xl lg:mb-3 lg:text-7xl 3xl:mb-4 3xl:text-8xl">
					Diego Reyes
				</h1>
				<span className="pl-0.5 text-2xl font-semibold leading-7 antialiased lg:text-4xl 3xl:text-5xl">
					Frontend Developer
				</span>
				<div className="select-none pt-6 font-medium lg:pt-10 2xl:pt-14">
					<span
						className={`relative text-xl after:relative after:bottom-[2px] after:left-[3px] after:inline-block after:content-['|'] lg:text-2xl 3xl:text-3xl ${
							textChanging ? '' : 'after:motion-safe:animate-text-machine'
						}`}
					>
						{textValue}
					</span>
					<div className="mt-2 space-x-7 lg:mt-4">
						<HeroButtton
							htmlTag="button"
							animation="fromBottom"
							shouldShow={dialogueStatus === 'What do you think?'}
							callback={answerQuestion}
						>
							Why should I?
						</HeroButtton>
						<HeroButtton
							htmlTag="button"
							animation="fromBottom"
							shouldShow={dialogueStatus === 'What do you think?'}
							callback={answerQuestion}
						>
							Of course!
						</HeroButtton>
						<HeroButtton
							htmlTag="anchor"
							animation="fromRight"
							shouldShow={dialogueStatus === 'Let me show you.'}
							callback={onDelete}
							href="#projects"
						>
							Projects
						</HeroButtton>
						<HeroButtton
							htmlTag="anchor"
							animation="fromRight"
							shouldShow={dialogueStatus === "That's great to hear!"}
							callback={onDelete}
							href="#contact"
						>
							Contact
						</HeroButtton>
						<HeroButtton
							htmlTag="button"
							animation="fromLeft"
							shouldShow={dialogueStatus === "Let's work together!"}
							callback={onStartOver}
						>
							Start Over
						</HeroButtton>
					</div>
				</div>
			</div>
			<ScrollButton />
		</section>
	);
});
