import React from "react";
import { TextContent } from "../TextContent";

function BulletedTextContent({ text }) {
  return <TextContent text={text} bulleted />;
}

export { BulletedTextContent };
