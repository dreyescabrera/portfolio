import React from "react";
import { Icon } from "../common/Icon";

function TextContent({ text, bulleted }) {
  return (
    <p className="xs:text-lg">
      {bulleted && (
        <Icon
          type="arrowLeft"
          styles="w-4 h-4 inline-block text-[#21396c] mr-2"
        />
      )}
      {text}
    </p>
  );
}

export { TextContent };
