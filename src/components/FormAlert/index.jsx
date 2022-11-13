import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function FormAlert({ formAlert }) {
  return (
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
  );
}

export { FormAlert };
