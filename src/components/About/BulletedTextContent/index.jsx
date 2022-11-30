import React from "react";
import { TextContent } from "../../common/TextContent";

function BulletedTextContent({ text }) {
  return <TextContent text={text} bulleted />;
}

export { BulletedTextContent };
