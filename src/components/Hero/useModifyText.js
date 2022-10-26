import React from "react";
const phrases = [
  "Let's work together!",
  "What do you think?",
  "That's great to hear!",
  "Let me show you.",
];

function useModifyText() {
  const [textValue, setTextValue] = React.useState("");
  const [currentText, setCurrentText] = React.useState(phrases[0]);
  const [nextText, setNextText] = React.useState(phrases[1]);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const onWrite = (index, text) => {
    setTimeout(() => {
      setTextValue((prev) => prev + text[index]);
      text[index + 1] ? onWrite(index + 1, text) : setIsDeleting(true);
    }, 75);
  };

  const onChangeCurrentText = (newText, upcomingText) => {
    setCurrentText(newText);
    newText === phrases[0] ? setNextText(null) : setNextText(upcomingText);
  };

  const onDelete = (autoWriteNextText = true) => {
    setTimeout(() => {
      setTextValue((prev) => {
        const newText = prev.substring(0, prev.length - 1);
        if (newText) onDelete(autoWriteNextText);
        else {
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
    console.log(currentText);
    if (!currentText) return;

    if (isDeleting) {
      setTimeout(() => {
        nextText && onDelete();
      }, 3000);
    } else {
      onWrite(0, currentText);
    }
  }, [isDeleting]);
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
  };
}

export { useModifyText };
