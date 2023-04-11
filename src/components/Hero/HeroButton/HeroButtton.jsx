import { LazyMotion, AnimatePresence, m } from "framer-motion";

const loadFeatures = () =>
	import("../../../features/domAnimation").then((res) => res.default);

function HeroButtton({
	type,
	text,
	answerQuestion,
	triggeringText,
	userAnswer,
	startOver,
	textToPrint,
}) {
	let buttonMustAppear;
	let navTo;
	switch (type) {
		case "option":
			buttonMustAppear = triggeringText === "What do you think?";
			return (
				<LazyMotion features={loadFeatures}>
					<AnimatePresence>
						{buttonMustAppear && (
							<m.button
								className="relative p-1 
            after:content-[''] after:absolute after:w-5/6 after:h-[2px] after:left-[6px] after:bottom-0 after:bg-quaternary hover:after:scale-100 after:transition-transform after:duration-500
            lg:text-lg lg:after:scale-50 3xl:text-xl"
								onClick={answerQuestion}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ ease: "easeInOut", duration: 0.8 }}
							>
								{text}
							</m.button>
						)}
					</AnimatePresence>
				</LazyMotion>
			);
		case "navigation":
			navTo = userAnswer === "That's great to hear!" ? "contact" : "projects";
			buttonMustAppear = triggeringText === userAnswer && navTo === text;
			return (
				<LazyMotion features={loadFeatures}>
					<AnimatePresence>
						{buttonMustAppear && (
							<m.a
								href={`#${text}`}
								className="relative inline-block p-1 text-lg lg:text-2xl after:content-[''] after:absolute after:w-5/6 after:h-[2px] after:left-[8px] after:-bottom-1 after:bg-quaternary hover:after:scale-100 after:transition-transform after:duration-500 lg:after:scale-50 lg:after:left-[10px]"
								onClick={answerQuestion}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 20 }}
								transition={{ ease: "easeInOut", duration: 0.8 }}
							>
								{text.toUpperCase()}
							</m.a>
						)}
					</AnimatePresence>
				</LazyMotion>
			);
		case "startOver":
			buttonMustAppear =
				triggeringText === "Let's work together!" && textToPrint.next === null;
			return (
				<LazyMotion features={loadFeatures}>
					<AnimatePresence>
						{buttonMustAppear && (
							<m.button
								className="relative p-1
              after:content-[''] after:absolute after:w-5/6 after:h-[2px] after:left-[6px] after:bottom-0 after:bg-quaternary hover:after:scale-100 after:transition-all after:duration-500
              lg:text-lg lg:after:scale-50 3xl:text-xl"
								onClick={(ev) => {
									startOver();
									answerQuestion(ev);
								}}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ ease: "easeInOut", duration: 0.8 }}
							>
								{text}
							</m.button>
						)}
					</AnimatePresence>
				</LazyMotion>
			);
	}

	return;
}

export { HeroButtton };