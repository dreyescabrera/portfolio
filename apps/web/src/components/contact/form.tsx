'use client';
import { Suspense, lazy } from 'react';
import { useEmailing } from '@/hooks/use-emailing';

const FormAlert = lazy(() => import('./form-alert'));

export const Form = () => {
	const { form, formAlert, sendEmail } = useEmailing();

	return (
		<form
			ref={form}
			className="relative flex flex-grow flex-col rounded-sm p-4 shadow-md transition-colors duration-500 dark:bg-quaternary"
			id="form"
			onSubmit={sendEmail}
		>
			<Suspense fallback="">
				<FormAlert formAlert={formAlert} />
			</Suspense>
			<label className="text-black transition-colors duration-500 dark:text-lightGray xs:text-lg lg:text-xl">
				Your Name
				<input
					type="text"
					name="user_name"
					placeholder="Dana"
					required
					className=" mt-1 w-full rounded-sm px-2 py-1 text-black outline outline-1 outline-midGray transition-colors duration-500 placeholder:text-midGray focus-within:outline-2 focus-within:outline-terciary dark:bg-primary dark:text-lightGray dark:outline-quaternary dark:placeholder:text-terciary xl:text-lg"
				/>
			</label>
			<label className="mt-4 text-black transition-colors duration-500 dark:text-lightGray xs:text-lg lg:text-xl">
				Your Email
				<input
					type="email"
					name="user_email"
					placeholder="example@email.com"
					required
					pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
					className="mt-1 w-full rounded-sm px-2 py-1 text-black outline outline-1 outline-midGray transition-colors duration-500 placeholder:text-midGray focus-within:outline-2 focus-within:outline-terciary dark:bg-primary dark:text-lightGray dark:outline-quaternary dark:placeholder:text-terciary xl:text-lg"
				/>
			</label>
			<label className="mt-4 text-black transition-colors duration-500 dark:text-lightGray xs:text-lg lg:text-xl">
				Message
				<textarea
					name="message"
					rows={5}
					placeholder="Hello!"
					required
					className="mt-1 w-full resize-y rounded-sm px-2 py-1 text-black outline outline-1 outline-midGray transition-colors duration-500 placeholder:text-midGray focus-within:outline-2 focus-within:outline-terciary dark:bg-primary dark:text-lightGray dark:outline-quaternary dark:placeholder:text-terciary xl:text-lg"
				></textarea>
			</label>
			<button
				type="submit"
				className="mx-auto my-5 rounded-sm bg-secondary px-6 py-3 text-white transition-colors duration-200 hover:bg-primary dark:bg-darkPrimary dark:text-primary dark:hover:bg-lightGray xs:text-lg lg:px-6 lg:text-base"
			>
				Send Email
			</button>
		</form>
	);
};
