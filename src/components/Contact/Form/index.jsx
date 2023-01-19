import React, { Suspense, lazy } from "react";
import { useEmailing } from "./useEmailing";

const FormAlert = lazy(() => import("../FormAlert"));

function Form() {
  const { form, formAlert, emailInput, sendEmail } = useEmailing();

  return (
    <form
      ref={form}
      className="relative flex flex-col flex-grow p-4 shadow-md rounded-sm"
      id="form"
      onSubmit={sendEmail}
    >
      <Suspense fallback="">
        <FormAlert formAlert={formAlert} />
      </Suspense>
      <label htmlFor="user_name" className="xs:text-lg lg:text-xl text-black">
        Your Name
      </label>
      <input
        type="text"
        id="user_name"
        name="user_name"
        placeholder="Dana"
        required
        className="mt-1 px-2 py-1 rounded-sm outline-1 outline outline-midGray xl:text-lg text-black focus-within:outline-2 focus-within:outline-terciary"
      />
      <label
        htmlFor="user_email"
        className="mt-4 xs:text-lg lg:text-xl text-black"
      >
        Your Email
      </label>
      <input
        type="email"
        id="user_email"
        name="user_email"
        placeholder="example@email.com"
        required
        pattern="^[\w\d]+@[\w\d]+\.[a-z]{2,5}$"
        ref={emailInput}
        className="mt-1 px-2 py-1 rounded-sm outline-1 outline outline-midGray xl:text-lg text-black focus-within:outline-2 focus-within:outline-terciary"
      />
      <label
        htmlFor="message"
        className="mt-4 xs:text-lg lg:text-xl text-black"
      >
        Message
      </label>
      <textarea
        name="message"
        id="message"
        rows="5"
        placeholder="Hello!"
        required
        className="resize-y mt-1 px-2 py-1 rounded-sm outline-1 outline outline-midGray xl:text-lg text-black focus-within:outline-2 focus-within:outline-terciary"
      ></textarea>
      <button
        type="submit"
        className="mx-auto my-5 px-6 py-3 xs:text-lg bg-secondary text-white rounded-sm hover:bg-primary transition-colors duration-200 lg:text-base lg:px-6"
      >
        Send Email
      </button>
    </form>
  );
}

export { Form };
