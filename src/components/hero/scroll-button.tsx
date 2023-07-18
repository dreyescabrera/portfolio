'use client';

import { useEffect, useRef } from 'react';

type ScrollButtonProps = {
	top?: number;
};

export function ScrollButton({ top = 0 }: ScrollButtonProps) {
	const topPosition = useRef<number>(0);

	useEffect(() => {
		topPosition.current = innerHeight;
	}, []);

	const scrollDown = () => {
		scrollTo({
			left: 0,
			top: topPosition.current,
			behavior: 'smooth',
		});
	};

	return (
		<div className="group row-start-4 col-start-3 justify-self-center self-center col-end-5 rounded-full md:row-start-5 md:place-self-center ">
			<button
				className="relative border-[3px] border-solid rounded-full text-white group-hover:translate-y-1 transition-transform duration-500"
				type="button"
				name="Scroll Down"
				title="Scroll Down"
				onClick={scrollDown}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="relative top-[2px] w-12 h-12 "
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>
			</button>
		</div>
	);
}
