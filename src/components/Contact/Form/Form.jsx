import { Suspense, lazy } from "react";
import { useEmailing } from "@hooks/useEmailing";

const FormAlert = lazy(() => import("../FormAlert/FormAlert"));

export const Form = () => {
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
			<label className="xs:text-lg lg:text-xl text-black dark:text-lightGray transition-colors duration-500">
				Your Name
				<input
					type="text"
					name="user_name"
					placeholder="Dana"
					required
					className=" w-full mt-1 px-2 py-1 rounded-sm outline-1 outline outline-midGray xl:text-lg text-black dark:text-lightGray focus-within:outline-2 focus-within:outline-terciary dark:bg-primary dark:outline-quaternary placeholder:text-midGray dark:placeholder:text-terciary transition-colors duration-500"
				/>
			</label>
			<label className="mt-4 xs:text-lg lg:text-xl text-black dark:text-lightGray transition-colors duration-500">
				Your Email
				<input
					type="email"
					name="user_email"
					placeholder="example@email.com"
					required
					pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
					ref={emailInput}
					className="w-full mt-1 px-2 py-1 rounded-sm outline-1 outline outline-midGray xl:text-lg text-black dark:text-lightGray focus-within:outline-2 focus-within:outline-terciary dark:bg-primary dark:outline-quaternary placeholder:text-midGray dark:placeholder:text-terciary transition-colors duration-500"
				/>
			</label>
			<label className="mt-4 xs:text-lg lg:text-xl text-black dark:text-lightGray transition-colors duration-500">
				Message
				<textarea
					name="message"
					rows="5"
					placeholder="Hello!"
					required
					className="w-full resize-y mt-1 px-2 py-1 rounded-sm outline-1 outline outline-midGray xl:text-lg text-black dark:text-lightGray focus-within:outline-2 focus-within:outline-terciary dark:bg-primary dark:outline-quaternary placeholder:text-midGray dark:placeholder:text-terciary transition-colors duration-500"
				></textarea>
			</label>
			<button
				type="submit"
				className="mx-auto my-5 px-6 py-3 xs:text-lg bg-secondary text-white rounded-sm hover:bg-primary transition-colors duration-200 lg:text-base lg:px-6 dark:text-primary dark:bg-darkPrimary dark:hover:bg-lightGray"
			>
				Send Email
			</button>
		</form>
	);
};
