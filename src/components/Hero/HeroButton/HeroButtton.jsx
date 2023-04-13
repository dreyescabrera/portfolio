import { LazyMotion, AnimatePresence, m } from "framer-motion";

const loadFeatures = () =>
	import("../../../features/domAnimation").then((res) => res.default);

const LIFECYCLE_ANIMATION = {
	fromBottom: {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 20 },
	},
	fromLeft: {
		initial: { opacity: 0, x: -20 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -20 },
	},
	fromRight: {
		initial: { opacity: 0, x: 20 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 20 },
	},
};

function HeroButtton({ type, animation, text, callback, shouldShow }) {
	const props = {
		className:
			"relative inline-block py-0.5 text-lg after:content-[''] after:absolute after:w-5/6 after:h-[2px] after:left-0 after:right-0 after:mx-auto after:bottom-0 after:bg-quaternary hover:after:scale-100 after:transition-transform after:duration-500 after:scale-50 lg:after:-bottom-1 3xl:text-xl",
		onClick: callback,
		transition: { ease: "easeInOut", duration: 0.8 },
		...LIFECYCLE_ANIMATION[animation],
	};

	const anchorProps = {
		...props,
		href: "#" + text.toLowerCase(),
	};
	anchorProps.className += " uppercase lg:text-2xl";

	return (
		<LazyMotion features={loadFeatures}>
			<AnimatePresence>
				{shouldShow && type === "button" && (
					<m.button {...props}>{text}</m.button>
				)}
				{shouldShow && type === "anchor" && <m.a {...anchorProps}>{text}</m.a>}
			</AnimatePresence>
		</LazyMotion>
	);
}

export { HeroButtton };
