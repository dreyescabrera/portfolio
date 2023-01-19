import React from "react";
import { Icon } from "../Icon";

function TextContent({ text, bulleted }) {
  return (
    <p className="mb-4 xs:text-lg xl:text-xl">
      {bulleted && (
        <Icon
          type="arrowLeft"
          styles="relative -top-px w-4 h-4 inline-block text-[#21396c] mr-2"
        />
      )}
      {text}
    </p>
  );
}

export { TextContent };
