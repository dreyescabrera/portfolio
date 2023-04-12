import { useRef, useEffect, useState, useReducer } from "react";

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

const initialState = {
	isFirstDialogue: true,
	textValue: "",
	textToPrint: DIALOGUE_TREE,
	textChanging: false,
	shouldDelete: false,
	isVisible: document.visibilityState === "visible",
};

const actionTypes = {
	visible: "VISIBLE",
	restart: "RESTART",
	write: "WRITE",
	first_delete: "FIRST_DELETE",
	delete: "DELETE",
	wait: "WAIT",
	update_dialogue: "UPDATE_DIALOGUE",
};

const reducerObject = (state, payload) => ({
	[actionTypes.visible]: {
		...state,
		isVisible: true,
	},
	[actionTypes.restart]: {
		...state,
		textToPrint: DIALOGUE_TREE,
	},
	[actionTypes.write]: {
		...state,
		textChanging: true,
		shouldDelete: false,
	},
	[actionTypes.first_delete]: {
		...state,
		isFirstDialogue: false,
		textChanging: true,
		shouldDelete: true,
	},
	[actionTypes.delete]: {
		...state,
		textChanging: true,
		shouldDelete: true,
	},
	[actionTypes.wait]: {
		...state,
		textChanging: false,
	},
	[actionTypes.update_dialogue]: {
		...state,
		textToPrint: payload,
	},
	[actionTypes.update_dialogue]: {
		...state,
		textToPrint: payload,
	},
});

const reducer = (state, action) => {
	return reducerObject(state, action.payload)[action.type] || state;
};

function useAnimatedText() {
	const firstPrintDelay = 2500;
	const textSpeed = 60;
	const userAnswer = useRef(null);
	const [textValue, setTextValue] = useState("");
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		window.addEventListener("visibilitychange", () => {
			if (document.visibilityState === "visible") {
				onVisible();
			}
		});
	}, []);

	const onStartOver = () => {
		dispatch({ type: actionTypes.restart });
	};

	const onVisible = () => {
		dispatch({ type: actionTypes.visible });
	};

	const onWait = () => {
		dispatch({ type: actionTypes.wait });
	};

	const onFirstDelete = () => {
		setTimeout(() => {
			dispatch({ type: actionTypes.first_delete });
		}, firstPrintDelay);
	};

	const onWrite = () => {
		dispatch({ type: actionTypes.write });
	};

	const onUpdateDialogue = (nextDialogue) => {
		dispatch({ type: actionTypes.update_dialogue, payload: nextDialogue });
	};

	const onDelete = () => {
		dispatch({ type: actionTypes.delete });
	};

	// shouldDelete === true -> it starts deleting and when finished, turns into false.
	// shouldDelete === false -> it starts printing next dialogue asap

	const writeText = (index = 0) => {
		setTimeout(() => {
			const currentDialogue = state.textToPrint.current;
			setTextValue((prev) => prev + currentDialogue[index]);
			if (currentDialogue[index + 1]) {
				// recursion inside the setstate because of the asynchrony of setstate
				writeText(index + 1);
				return;
			}
			onWait();
			if (state.isFirstDialogue) {
				onFirstDelete();
			}
		}, textSpeed);
	};

	const deleteText = () => {
		setTimeout(() => {
			setTextValue((prev) => {
				const newText = prev.substring(0, prev.length - 1);
				if (newText.length) {
					// call another setTimeout and updates textValue
					deleteText();
					return newText;
				}
				changeDialogue();
				onWrite();
				return newText;
			});
		}, textSpeed);
	};

	const changeDialogue = () => {
		if (Array.isArray(state.textToPrint.next)) {
			const nextText = state.textToPrint.next.find(
				(sentence) => sentence.current === userAnswer.current
			);
			onUpdateDialogue(nextText);
			return;
		}
		onUpdateDialogue(state.textToPrint.next);
	};

	const answerQuestion = (ev) => {
		const clickedButton = ev.target.textContent;
		if (clickedButton === "Of course!") userAnswer.current = SENTENCES.affirmed;
		else userAnswer.current = SENTENCES.denied;

		onDelete();
	};

	useEffect(() => {
		if (!state.isVisible) return;

		if (state.shouldDelete) {
			deleteText();
			return;
		}

		if (state.isFirstDialogue) {
			setTimeout(() => {
				writeText();
			}, firstPrintDelay);
			return;
		}

		writeText();
	}, [state.shouldDelete, state.isVisible]);

	return {
		textValue,
		answerQuestion,
		textChanging: state.textChanging,
		userAnswer,
		onStartOver,
		textToPrint: state.textToPrint,
	};
}

export { useAnimatedText };
