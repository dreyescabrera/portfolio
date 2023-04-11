import { useRef, useEffect, useState } from "react";

const SENTENCES = {
	main: "Let's work together!",
	question: "What do you think?",
	affirmed: "That's great to hear!",
	denied: "Let me show you.",
};

const DIALOGUE_TREE = {
	current: SENTENCES.main,
	next: {
		current: SENTENCES.question,
		next: [
			{
				current: SENTENCES.affirmed,
				next: {
					current: SENTENCES.main,
					next: null,
				},
			},
			{
				current: SENTENCES.denied,
				next: {
					current: SENTENCES.main,
					next: null,
				},
			},
		],
	},
};

function useAnimatedText() {
	const firstPrintDelay = 2500;
	const textSpeed = 60;
	const userAnswer = useRef(null);
	const [isFirstPrint, setIsFirstPrint] = useState(true);
	const [textValue, setTextValue] = useState("");
	const [textToPrint, setTextToPrint] = useState(DIALOGUE_TREE);
	const [textChanging, setTextChanging] = useState(false);
	const [shouldDelete, setShouldDelete] = useState(false);
	const [isVisible, setIsVisible] = useState(
		() => document.visibilityState === "visible"
	);

	useEffect(() => {
		window.addEventListener("visibilitychange", () => {
			if (document.visibilityState === "visible") {
				setIsVisible(true);
			}
		});
	}, []);

	const startOver = () => {
		setTextToPrint(DIALOGUE_TREE);
	};

	// when shouldDelete turns true, it will start deleting and once it finishes, turns it into false.
	// once shouldDelete is false, it will start printing the textToPrint
	// before turning shouldDelete into false, it will define the current textToPrint

	const onWrite = (text, index = 0) => {
		setTimeout(() => {
			setTextValue((prev) => prev + text[index]);
			if (text[index + 1]) {
				// recursion inside the setstate because of the asynchrony of setstate
				onWrite(text, index + 1);
				return;
			}
			setTextChanging(false);

			if (isFirstPrint) {
				setTimeout(() => {
					setIsFirstPrint(false);
					setShouldDelete(true);
				}, firstPrintDelay);
			}
		}, textSpeed);
	};

	const onDelete = () => {
		setTimeout(() => {
			setTextValue((prev) => {
				const newText = prev.substring(0, prev.length - 1);
				if (newText.length) {
					// call another setTimeout and updates textValue
					onDelete();
					return newText;
				}
				onChangeCurrentText();
				setShouldDelete(false);
				return newText;
			});
		}, textSpeed);
	};

	const onChangeCurrentText = () => {
		if (Array.isArray(textToPrint.next)) {
			const nextText = textToPrint.next.find(
				(sentence) => sentence.current === userAnswer.current
			);
			setTextToPrint(nextText);
			return;
		}
		setTextToPrint(textToPrint.next);
	};

	const answerQuestion = (ev) => {
		const clickedButton = ev.target.textContent;
		if (clickedButton === "Of course!") userAnswer.current = SENTENCES.affirmed;
		else userAnswer.current = SENTENCES.denied;

		setShouldDelete(true);
	};

	useEffect(() => {
		if (!isVisible) return;
		setTextChanging(true);

		if (shouldDelete) {
			onDelete();
			return;
		}

		if (isFirstPrint) {
			setTimeout(() => {
				onWrite(textToPrint.current);
			}, firstPrintDelay);
			return;
		}

		onWrite(textToPrint.current);
	}, [shouldDelete, isVisible]);

	return {
		textValue,
		answerQuestion,
		textChanging,
		userAnswer,
		startOver,
		textToPrint,
	};
}

export { useAnimatedText };
