import React from "react";
import { LazyMotion, AnimatePresence, m } from "framer-motion";

const loadFeatures = () =>
  import("../../features/domAnimation").then((res) => res.default);

function FormAlert({ formAlert }) {
  return (
    <LazyMotion features={loadFeatures}>
      <AnimatePresence>
        {formAlert.isVisible && (
          <m.span
            className="absolute w-28 p-1 top-0 left-0 right-0 mx-auto rounded-lg bg-green-200 text-center"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            {formAlert.status}
          </m.span>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

export { FormAlert };
