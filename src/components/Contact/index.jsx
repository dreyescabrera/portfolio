import React from "react";
import { SectionTitle } from "../SectionTitle";
import { SocialMediaItem } from "../SocialMediaItem";
import { Form } from "../Form";

function Contact({ refference }) {
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
        <Form />
      </div>
    </section>
  );
}

export { Contact };
