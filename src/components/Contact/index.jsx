import React from "react";
import { FormAlert } from "../FormAlert";
import { SectionTitle } from "../SectionTitle";
import { SocialMediaItem } from "../SocialMediaItem";
import { useEmailing } from "./useEmailing";

function Contact({ refference }) {
  const { form, formAlert, sendEmail } = useEmailing();

  return (
    <section className="m-sm lg:m-lg" id="contact" ref={refference}>
      <SectionTitle text="Contact" />
      <div className="flex flex-col mt-10 gap-5 items-start-center lg:flex-row">
        <ul className="w-full lg:w-2/5 space-y-5">
          <SocialMediaItem
            name="LinkedIn"
            nickname="diegoreyescabrera"
            link="https://www.linkedin.com/in/diegoreyescabrera/"
          />
          <SocialMediaItem
            name="Github"
            nickname="realDiegoR"
            link="https://github.com/realDiegoR"
          />
          <SocialMediaItem
            name="Instagram"
            nickname="realdiegor"
            link="https://instagram.com/realdiegor"
          />
        </ul>
        <form
          ref={form}
          className="relative flex flex-col flex-grow p-4 shadow-md rounded-sm"
          id="form"
          onSubmit={sendEmail}
        >
          <FormAlert formAlert={formAlert} />
          <label htmlFor="user_name" className=" xs:text-lg text-gray-700">
            Your Name{" "}
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Dana"
            required
            className="m-1 px-2 py-1 rounded-sm outline-1 outline outline-gray-500 text-quintenary focus-within:outline-2 focus-within:outline-terciary"
          />
          <label htmlFor="user_email" className="mt-3 xs:text-lg text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="example@email.com"
            required
            className="m-1 px-2 py-1 rounded-sm outline-1 outline outline-gray-500 text-quintenary  focus-within:outline-2 focus-within:outline-terciary"
          />
          <label htmlFor="message" className="mt-3 xs:text-lg text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Hello!"
            required
            className="resize-none mt-1 px-2 py-1 rounded-sm outline-1 outline outline-gray-500 text-quintenary focus-within:outline-2 focus-within:outline-terciary"
          ></textarea>
          <button
            type="submit"
            className="mx-auto my-5 px-6 py-3 xs:text-lg bg-secondary text-gray-100 rounded hover:bg-primary transition-colors duration-200 lg:text-base lg:px-6"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
}

export { Contact };
