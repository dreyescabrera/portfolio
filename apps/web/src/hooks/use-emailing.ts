'use client';

import { type MouseEventHandler, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export type FormAlert = {
	status: 'success' | 'error' | 'idle';
	message: 'Email Sent!' | 'Oops... there was an error.' | '';
	isVisible: boolean;
};

export function useEmailing() {
	const form = useRef<HTMLFormElement>(null);
	const [formAlert, setFormAlert] = useState<FormAlert>({
		status: 'idle',
		message: '',
		isVisible: false,
	});

	const sendEmail: MouseEventHandler<HTMLFormElement> = (ev) => {
		ev.preventDefault();
		emailjs
			.sendForm(
				'service_fbn1m8j',
				'template_o7fwdnu',
				form.current as HTMLFormElement,
				'St5iv4lgJlmyZvCCN'
			)
			.then(() => {
				form.current!.reset();
				setFormAlert({ status: 'success', message: 'Email Sent!', isVisible: true });
			})
			.catch((err) => {
				console.error(err);
				setFormAlert({
					status: 'error',
					message: 'Oops... there was an error.',
					isVisible: true,
				});
			})
			.finally(() => {
				setTimeout(() => {
					setFormAlert({ status: 'idle', message: '', isVisible: false });
				}, 2000);
			});
	};

	return { form, formAlert, sendEmail };
}
