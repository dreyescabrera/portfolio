import React from "react";
const phrases = [
  "Let's work together!",
  "What do you think?",
  "That's great to hear!",
  "Let me show you.",
];

function useModifyText() {
  const [isVisible, setIsVisible] = React.useState(
    () => document.visibilityState === "visible"
  );
  const [textValue, setTextValue] = React.useState("");
  const [currentText, setCurrentText] = React.useState(phrases[0]);
  const [nextText, setNextText] = React.useState(phrases[1]);
  const [textIsChanging, setTextIsChanging] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const onWrite = (index, text) => {
    setTimeout(() => {
      setTextIsChanging(true);
      setTextValue((prev) => prev + text[index]);
      if (text[index + 1]) {
        onWrite(index + 1, text);
      } else {
        setTextIsChanging(false);
        setIsDeleting(true);
      }
    }, 75);
  };

  const onChangeCurrentText = (newText, upcomingText) => {
    setCurrentText(newText);
    newText === phrases[0] ? setNextText(null) : setNextText(upcomingText);
  };

  const onDelete = (autoWriteNextText = true) => {
    setTimeout(() => {
      setTextIsChanging(true);
      setTextValue((prev) => {
        const newText = prev.substring(0, prev.length - 1);
        if (newText) onDelete(autoWriteNextText);
        else {
          setTextIsChanging(false);
          setIsDeleting(false);
          autoWriteNextText && onChangeCurrentText(nextText, null);
        }
        return newText;
      });
    }, 75);
  };

  const answerQuestion = (ev) => {
    ev.target.textContent === "Why should I?"
      ? setCurrentText(phrases[3])
      : setCurrentText(phrases[2]);

    setNextText(phrases[0]);
    onDelete(false);
  };

  React.useEffect(() => {
    if (!currentText) return;

    if (isDeleting) {
      setTimeout(() => {
        nextText && onDelete();
      }, 3000);
    } else {
      if (currentText === phrases[0]) {
        setTimeout(() => {
          isVisible && onWrite(0, currentText);
        }, 600);
      } else {
        isVisible && onWrite(0, currentText);
      }
    }
  }, [isDeleting, isVisible]);

  React.useEffect(() => {
    window.addEventListener("visibilitychange", (ev) => {
      if (document.visibilityState === "visible") {
        setIsVisible(true);
      }
    });
  }, []);
  //CUANDO NEXTTEXT SEA NULL, NO SEGUIRA BORRANDO
  //EL ORDEN:
  //WORK TOGETHER - WHATCHA THINK?
  //WHATCHA THINK - NULL
  //*ANSWER* - WORK TOGETHER
  //WORK TOGETHER - NULL
  //PAAAAAAM

  return {
    textValue,
    answerQuestion,
    textIsChanging,
  };
}

export { useModifyText };
