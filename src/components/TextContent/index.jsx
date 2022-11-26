import React from "react";
import { Icon } from "../Icon";

function TextContent({ text, bulleted }) {
  if (bulleted)
    return (
      <p className="xs:text-lg">
        <Icon type="arrowLeft" />
        {text}
      </p>
    );

  return <p className="xs:text-lg">{text}</p>;
}

export { TextContent };
