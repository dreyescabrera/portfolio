'use client';

import { useRef, useEffect, useState, useReducer, type MouseEventHandler } from 'react';

/** Types */

type DialogueNode = {
	current: string;
	next: DialogueNode | DialogueNode[] | null;
};
type ReducerState = typeof INITIAL_STATE;
type ReducerPayload = unknown;
type ReducerAction = {
	type: keyof typeof ACTION_TYPES;
	payload?: ReducerPayload;
};
type Reducer = (state: ReducerState, action: ReducerAction) => ReducerState;

/** Constants */

const SENTENCES = {
	main: "Let's work together!",
	question: 'What do you think?',
	affirmed: "That's great to hear!",
	denied: 'Let me show you.',
} as const;

const DIALOGUE_TREE: DialogueNode = {
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

const INITIAL_STATE = {
	dialogueStatus: 'start',
	isFirstDialogue: true,
	textValue: '',
	textToPrint: DIALOGUE_TREE,
	isTextChanging: false,
	shouldDelete: false,
	isVisible: false,
};

/** Reducer */

const ACTION_TYPES = {
	visible: 'visible',
	restart: 'restart',
	write: 'write',
	first_delete: 'first_delete',
	delete: 'delete',
	wait: 'wait',
	update_dialogue: 'update_dialogue',
} as const;

const reducerObject = (
	state: ReducerState,
	payload: ReducerPayload
): Record<keyof typeof ACTION_TYPES, ReducerState> => ({
	[ACTION_TYPES.visible]: {
		...state,
		isVisible: true,
	},
	[ACTION_TYPES.restart]: {
		...state,
		textToPrint: DIALOGUE_TREE,
		shouldDelete: true,
		dialogueStatus: 'changing',
	},
	[ACTION_TYPES.write]: {
		...state,
		isTextChanging: true,
		shouldDelete: false,
	},
	[ACTION_TYPES.first_delete]: {
		...state,
		isFirstDialogue: false,
		isTextChanging: true,
		shouldDelete: true,
		dialogueStatus: 'changing',
	},
	[ACTION_TYPES.delete]: {
		...state,
		isTextChanging: true,
		shouldDelete: true,
		dialogueStatus: 'changing',
	},
	[ACTION_TYPES.wait]: {
		...state,
		isTextChanging: false,
		dialogueStatus: payload as string,
	},
	[ACTION_TYPES.update_dialogue]: {
		...state,
		textToPrint: payload as DialogueNode,
	},
});

const reducer: Reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
	return reducerObject(state, action.payload)[action.type] || state;
};

/** Custom Hook */

export function useInteractiveText() {
	const firstPrintDelay = 2500;
	const textSpeed = 60;
	const userAnswer = useRef<string | null>(null);
	const [textValue, setTextValue] = useState('');
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const onStartOver = () => {
		dispatch({ type: ACTION_TYPES.restart });
	};

	const onVisible = () => {
		dispatch({ type: ACTION_TYPES.visible });
	};

	const onWait = (newDialogueStatus: string) => {
		dispatch({ type: ACTION_TYPES.wait, payload: newDialogueStatus });
	};

	const onFirstDelete = () => {
		setTimeout(() => {
			dispatch({ type: ACTION_TYPES.first_delete });
		}, firstPrintDelay);
	};

	const onWrite = () => {
		dispatch({ type: ACTION_TYPES.write });
	};

	const onUpdateDialogue = (nextDialogue: DialogueNode) => {
		dispatch({ type: ACTION_TYPES.update_dialogue, payload: nextDialogue });
	};

	const onDelete = () => {
		dispatch({ type: ACTION_TYPES.delete });
	};

	// shouldDelete === true --> it starts deleting and when finished, turns into false.
	// shouldDelete === false --> it starts printing next dialogue asap

	const writeText = (index = 0) => {
		setTimeout(() => {
			const currentDialogue = state.textToPrint.current;
			setTextValue((prev) => prev + currentDialogue[index]);
			if (currentDialogue[index + 1]) {
				// recursion inside the setstate because of the asynchrony of setstate
				writeText(index + 1);
				return;
			}
			if (state.isFirstDialogue) {
				onFirstDelete();
				return;
			}

			onWait(currentDialogue);
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
			onUpdateDialogue(nextText as DialogueNode);
			return;
		}
		onUpdateDialogue(state.textToPrint.next as DialogueNode);
	};

	const answerQuestion: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (ev) => {
		const clickedButton = ev.currentTarget.textContent;
		if (clickedButton === 'Of course!') userAnswer.current = SENTENCES.affirmed;
		else userAnswer.current = SENTENCES.denied;
		onDelete();
	};

	// used useEffect to write or delete text due to setState asynchrony, so it can write
	// or delete successfully from the real current value
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

	useEffect(() => {
		const start = () => {
			if (document.visibilityState === 'visible') {
				onVisible();
			}
		};

		start();
		window.addEventListener('visibilitychange', start);

		return () => {
			window.removeEventListener('visibilitychange', start);
		};
	}, []);

	return {
		textValue,
		textChanging: state.isTextChanging,
		dialogueStatus: state.dialogueStatus,
		answerQuestion,
		onStartOver,
		onDelete,
	};
}
