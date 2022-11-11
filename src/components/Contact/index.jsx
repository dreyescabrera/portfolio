import React from "react";
import emailjs from "@emailjs/browser";
import { SectionTitle } from "../SectionTitle";
import { SocialMediaItem } from "../SocialMediaItem";
import { AnimatePresence, motion } from "framer-motion";

function Contact() {
  const form = React.useRef();
  const [formAlert, setFormAlert] = React.useState({
    status: null,
    isVisible: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fbn1m8j",
        "template_o7fwdnu",
        form.current,
        "St5iv4lgJlmyZvCCN"
      )
      .then(() => {
        setFormAlert({ status: "Success!", isVisible: true });
        setTimeout(() => {
          setFormAlert({ ...formAlert, isVisible: false });
        }, 3000);
      })
      .catch(() => {
        setFormAlert({ status: "Error", isVisible: true });
        setTimeout(() => {
          setFormAlert({ ...formAlert, isVisible: false });
        }, 3000);
      });
  };

  return (
    <section className="m-sm lg:m-lg" id="contact" onSubmit={sendEmail}>
      <SectionTitle text="Contact" />
      <div className="flex flex-col mt-10 gap-5 items-start-center lg:flex-row">
        <ul className="w-full lg:w-2/5 space-y-5">
          <SocialMediaItem
            name="LinkedIn"
            nickname="diegoalejandroreyescabrera"
            link="https://www.linkedin.com/in/diegoalejandroreyescabrera/"
          />
          <SocialMediaItem
            name="Github"
            nickname="realDiegoR"
            link="https://github.com/realDiegoR"
          />
        </ul>
        <form
          ref={form}
          className="relative flex flex-col flex-grow p-4 shadow-lg"
        >
          <AnimatePresence>
            {formAlert.isVisible && (
              <motion.span
                className="absolute w-28 p-1 top-0 left-0 right-0 mx-auto rounded-lg bg-green-200 text-center"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -20 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              >
                {formAlert.status}
              </motion.span>
            )}
          </AnimatePresence>
          <label htmlFor="user_name">Your Name *</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Dana"
            required
            className="m-1 px-2 py-1 rounded-sm outline-1 outline outline-gray-500 text-quintenary focus-within:outline-terciary"
          />
          <label htmlFor="user_email" className="mt-3">
            Your Email *
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="example@email.com"
            required
            className="m-1 px-2 py-1 rounded-sm outline-1 outline outline-gray-500 text-quintenary focus-within:outline-terciary"
          />
          <label htmlFor="message" className="mt-3">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Hello!"
            required
            className="resize-none mt-1 px-2 py-1 rounded-sm outline-1 outline outline-gray-500 text-quintenary focus-within:outline-terciary focus-within:outline-2"
          ></textarea>
          <button
            type="submit"
            className="mx-auto my-5 px-5 py-2 bg-secondary text-gray-100 rounded shadow-sm shadow-blue-500 hover:bg-primary transition-colors duration-200 lg:text-base lg:px-6"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
}

export { Contact };
