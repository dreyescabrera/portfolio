'use client';

import type { InputHTMLAttributes, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { useEmailing } from '@/hooks/use-emailing';
import { Button } from '@/components/common';
const FormAlert = dynamic(() => import('./form-alert'), { ssr: false });

export const Form = () => {
	const { form, formAlert, sendEmail } = useEmailing();

	return (
		<form
			ref={form}
			className="relative flex flex-grow flex-col space-y-4 rounded-sm p-4 shadow-md transition-colors duration-500 dark:bg-quaternary"
			id="form"
			onSubmit={sendEmail}
		>
			<FormAlert formAlert={formAlert} />
			<Label>
				Your Name
				<Input type="text" name="user_name" placeholder="Dana" required />
			</Label>
			<Label>
				Your Email
				<Input
					type="email"
					name="user_email"
					placeholder="example@email.com"
					required
					pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
				/>
			</Label>
			<Label>
				Message
				<textarea
					name="message"
					rows={5}
					placeholder="Hello!"
					required
					className="mt-1 w-full resize-y rounded-sm px-2 py-1 text-black outline outline-1 outline-midGray transition-colors duration-500 placeholder:text-midGray focus-within:outline-2 focus-within:outline-terciary dark:bg-primary dark:text-lightGray dark:outline-quaternary dark:placeholder:text-terciary xl:text-lg"
				></textarea>
			</Label>
			<Button
				type="submit"
				className="mx-auto my-5 rounded-sm bg-secondary px-6 py-3 text-white transition-colors duration-200 hover:bg-primary dark:bg-darkPrimary dark:text-primary dark:hover:bg-lightGray xs:text-lg lg:px-6 lg:text-base"
			>
				Send Email
			</Button>
		</form>
	);
};

function Label({ children }: { children: ReactNode }) {
	return (
		<label className="text-black transition-colors duration-500 dark:text-lightGray xs:text-lg lg:text-xl">
			{children}
		</label>
	);
}

type NativeHTMLInputProps = InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends NativeHTMLInputProps {}

function Input({ ...NativeHTMLInputProps }: InputProps) {
	return (
		<input
			className="mt-1 w-full rounded-sm px-2 py-1 text-black outline outline-1 outline-midGray transition-colors duration-500 placeholder:text-midGray focus-within:outline-2 focus-within:outline-terciary dark:bg-primary dark:text-lightGray dark:outline-quaternary dark:placeholder:text-terciary xl:text-lg"
			{...NativeHTMLInputProps}
		/>
	);
}
