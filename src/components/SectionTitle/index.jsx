import React from "react";

function SectionTitle({ text }) {
  return (
    <h2 className="relative text-primary text-3xl font-bold font-luxury tracking-tight after:content[''] after:absolute after:-bottom-4 after:left-0 after:w-1/6 after:h-[3px] after:rounded-full after:bg-secondary xs:text-4xl lg:after:w-16 xl:tracking-normal">
      {text}
    </h2>
  );
}

export { SectionTitle };
