import { forwardRef } from 'react';
import { HeroButtton } from './hero-button';
import { ScrollButton } from './scroll-button';
import { useInteractiveText } from '@/hooks/use-interactive-text';
// import mobileAvif from '@assets/hero/hero_mobile.avif';
// import mobileWebp from '@assets/hero/hero-mobile.webp';
// import tabletAvif from '@assets/hero/hero_tablet.avif';
// import tabletWebp from '@assets/hero/hero_tablet.webp';
// import desktopAvif from '@assets/hero/hero_desktop.avif';
// import desktopWebp from '/hero/hero-desktop.webp';
import Image from 'next/image';

export const Hero = forwardRef<HTMLDivElement>(function Hero(props, ref) {
	const { textValue, textChanging, dialogueStatus, answerQuestion, onStartOver, onDelete } =
		useInteractiveText();
	return (
		<section
			id="home"
			className="relative grid grid-cols-6 grid-rows-5 justify-items-center w-full h-screen text-quaternary font-luxury "
			ref={ref}
		>
			<figure className="fixed -z-10 w-full h-screen">
				<Image src={'/hero/hero-desktop.webp'} fill alt="background" priority quality={95} />
				{/* <source
					srcSet={mobileAvif.src}
					type="image/avif"
					media="(max-width: 440px)"
					className="w-full h-full object-cover object-center"
				/>
				<source
					srcSet={mobileWebp.src}
					type="image/webp"
					media="(max-width: 440px)"
					className="w-full h-full object-cover object-center"
				/>
				<source
					srcSet={tabletAvif.src}
					type="image/avif"
					media="(min-width: 441px) and (max-width: 1023px)"
					className="w-full h-full object-cover object-center"
				/>
				<source
					srcSet={tabletWebp.src}
					type="image/webp"
					media="(min-width: 441px) and (max-width: 1023px)"
					className="w-full h-full object-cover object-center"
				/>
				<source
					srcSet={desktopAvif.src}
					type="image/avif"
					media="(min-width: 1024px)"
					className="w-full h-full object-cover object-center"
				/>
				<img
					src={desktopWebp.src}
					alt="background hero"
					className="w-full h-full object-cover object-center"
				/> */}
			</figure>
			<div className="col-span-full row-start-2 tracking-tight space-y-3 sm:space-y-4 lg:col-end-6 xl:col-end-5">
				<h1 className="font-bold mb-1 text-4xl antialiased xs:text-5xl sm:text-6xl lg:text-7xl 3xl:text-8xl lg:mb-3 3xl:mb-4">
					Diego Reyes
				</h1>
				<span className="pl-0.5 text-2xl antialiased font-semibold leading-7 lg:text-4xl 3xl:text-5xl">
					Frontend Developer
				</span>
				<div className="pt-6 font-medium select-none lg:pt-10 2xl:pt-14">
					<span
						className={`text-xl lg:text-2xl 3xl:text-3xl relative after:content-['|'] after:relative after:bottom-[2px] after:left-[3px] after:inline-block ${
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
