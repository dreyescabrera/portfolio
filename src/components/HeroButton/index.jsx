import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function HeroButtton({
  type,
  text,
  answerQuestion,
  triggeringText,
  chosenAnswer,
}) {
  let buttonMustAppear;
  let navTo;
  switch (type) {
    case "option":
      buttonMustAppear = triggeringText === "What do you think?";
      return (
        <AnimatePresence>
          {buttonMustAppear && (
            <motion.button
              className={`relative p-1 
            after:content-[''] after:absolute after:w-5/6 after:h-[2px] after:left-[6px] after:bottom-0 after:bg-[#16303b] hover:after:scale-100 after:transition-all after:duration-500
            lg:text-lg lg:after:scale-50`}
              onClick={answerQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
            >
              {text}
            </motion.button>
          )}
        </AnimatePresence>
      );
    case "navigation":
      navTo = chosenAnswer === "That's great to hear!" ? "contact" : "projects";
      buttonMustAppear = triggeringText === chosenAnswer && navTo === text;
      return (
        <AnimatePresence>
          {buttonMustAppear && (
            <motion.a
              href={`#${text}`}
              className={`relative inline-block p-1 font- text-lg lg:text-2xl
              after:content-[''] after:absolute after:w-5/6 after:h-[2px] after:left-[8px] after:-bottom-1 after:bg-[#16303b] hover:after:scale-100 after:transition-all after:duration-500
              lg:after:scale-50 lg:after:left-[10px]`}
              onClick={answerQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
            >
              {text.toUpperCase()}
            </motion.a>
          )}
        </AnimatePresence>
      );
  }

  return;
}

export { HeroButtton };
