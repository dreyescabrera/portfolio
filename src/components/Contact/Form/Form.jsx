import React, { Suspense, lazy } from "react";
import { useEmailing } from "../../../hooks/useEmailing";

const FormAlert = lazy(() => import("../FormAlert/FormAlert"));

function Form() {
	const { form, formAlert, emailInput, sendEmail } = useEmailing();

	return (
		<form
			ref={form}
			className="relative flex flex-col flex-grow p-4 shadow-md rounded-sm dark:bg-quaternary transition-colors duration-500"
			id="form"
			onSubmit={sendEmail}
		>
			<Suspense fallback="">
				<FormAlert formAlert={formAlert} />
			</Suspense>
			<label
				htmlFor="user_name"
				className="xs:text-lg lg:text-xl text-black dark:text-lightGray transition-colors duration-500"
			>
				Your Name
			</label>
			<input
				type="text"
				id="user_name"
				name="user_name"
				placeholder="Dana"
				required
				className="mt-1 px-2 py-1 rounded-sm outline-1 outline outline-midGray xl:text-lg text-black dark:text-lightGray focus-within:outline-2 focus-within:outline-terciary dark:bg-primary dark:outline-quaternary placeholder:text-midGray dark:placeholder:text-terciary transition-colors duration-500"
			/>
			<label
				htmlFor="user_email"
				className="mt-4 xs:text-lg lg:text-xl text-black dark:text-lightGray transition-colors duration-500"
			>
				Your Email
			</label>
			<input
				type="email"
				id="user_email"
				name="user_email"
				placeholder="example@email.com"
				required
				pattern="^[\w._%+-]+@[\w-]+\.[a-z]{2,}$"
				ref={emailInput}
				className="mt-1 px-2 py-1 rounded-sm outline-1 outline outline-midGray xl:text-lg text-black dark:text-lightGray focus-within:outline-2 focus-within:outline-terciary dark:bg-primary dark:outline-quaternary placeholder:text-midGray dark:placeholder:text-terciary transition-colors duration-500"
			/>
			<label
				htmlFor="message"
				className="mt-4 xs:text-lg lg:text-xl text-black dark:text-lightGray transition-colors duration-500"
			>
				Message
			</label>
			<textarea
				name="message"
				id="message"
				rows="5"
				placeholder="Hello!"
				required
				className="resize-y mt-1 px-2 py-1 rounded-sm outline-1 outline outline-midGray xl:text-lg text-black dark:text-lightGray focus-within:outline-2 focus-within:outline-terciary dark:bg-primary dark:outline-quaternary placeholder:text-midGray dark:placeholder:text-terciary transition-colors duration-500"
			></textarea>
			<button
				type="submit"
				className="mx-auto my-5 px-6 py-3 xs:text-lg bg-secondary text-white rounded-sm hover:bg-primary transition-colors duration-200 lg:text-base lg:px-6 dark:text-primary dark:bg-darkPrimary dark:hover:bg-lightGray"
			>
				Send Email
			</button>
		</form>
	);
}

export { Form };
