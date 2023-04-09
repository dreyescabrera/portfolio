import React from "react";

const phrases = {
	main: "Let's work together!",
	question: "What do you think?",
	affirmed: "That's great to hear!",
	denied: "Let me show you.",
};

let questionSentence = {
	currentSentence: phrases.main,
	next: {
		currentSentence: phrases.question,
		next: [
			{
				currentSentence: phrases.affirmed,
				next: {
					currentSentence: phrases.main,
					next: null,
				},
			},
			{
				currentSentence: phrases.denied,
				next: {
					currentSentence: phrases.main,
					next: null,
				},
			},
		],
	},
};

function useAnimatedText() {
	const textSpeed = 60;
	const chosenAnswer = React.useRef(null);

	const [isVisible, setIsVisible] = React.useState(
		() => document.visibilityState === "visible"
	);

	React.useEffect(() => {
		window.addEventListener("visibilitychange", () => {
			if (document.visibilityState === "visible") {
				setIsVisible(true);
			}
		});
	}, []);

	const [textValue, setTextValue] = React.useState("");
	const [textToPrint, setTextToPrint] = React.useState(questionSentence);
	const [textIsChanging, setTextIsChanging] = React.useState(false); //used by text-machine animation
	const [mustDelete, setMustDelete] = React.useState(false);

	const startOver = () => {
		setTextToPrint(questionSentence);
	};

	//when mustDelete turns true, it will start deleting and once it finishes, turns it into false.
	//once mustDelete is false, it will start printing the textToPrint
	//before turning mustDelete into false, it will define the current textToPrint

	const onWrite = (index, text) => {
		setTimeout(() => {
			setTextValue((prev) => prev + text[index]);
			if (text[index + 1]) {
				//recursion inside the setstate because of the asynchrony of setstate
				onWrite(index + 1, text);
				return;
			}
			setTextIsChanging(false);

			// currently only used by the first printing
			if (textToPrint.currentSentence === phrases.main && textToPrint.next) {
				setTimeout(() => {
					setMustDelete(true);
				}, 2500);
			}
		}, textSpeed);
	};

	const onDelete = () => {
		setTimeout(() => {
			setTextValue((prev) => {
				const newText = prev.substring(0, prev.length - 1);
				if (newText.length) {
					onDelete();
					return newText;
				}
				onChangeCurrentText(); //PRINT
				setMustDelete(false);
				return newText;
			});
		}, textSpeed);
	};

	const onChangeCurrentText = () => {
		if (Array.isArray(textToPrint.next)) {
			const nextText = textToPrint.next.find(
				(sentence) => sentence.currentSentence === chosenAnswer.current
			);
			setTextToPrint(nextText); //UPDATE TEXT
			return;
		}
		setTextToPrint(textToPrint.next);
	};

	const answerQuestion = (ev) => {
		chosenAnswer.current =
			ev.target.textContent === "Of course!"
				? phrases.affirmed
				: phrases.denied;

		setMustDelete(true); //DELETE
	};

	React.useEffect(() => {
		if (!isVisible) return;
		setTextIsChanging(true); //ANIMATE TEXT MACHINE

		if (mustDelete) {
			onDelete();
			return;
		}

		if (textToPrint.currentSentence === phrases.main) {
			setTimeout(() => {
				onWrite(0, textToPrint.currentSentence);
			}, 2000);
			return;
		}

		onWrite(0, textToPrint.currentSentence);
	}, [mustDelete, isVisible]);

	return {
		textValue,
		answerQuestion,
		textIsChanging,
		chosenAnswer,
		startOver,
		textToPrint,
	};
}

export { useAnimatedText };
