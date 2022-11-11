import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function HeroButtton({ text, answerQuestion, questionText }) {
  const buttonMustAppear = questionText === "What do you think?";

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
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          {text}
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export { HeroButtton };
