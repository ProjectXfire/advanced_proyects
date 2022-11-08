import React, { useContext } from "react";
// Contexts
import { QuizContext } from "../context";
// Styles
import style from "styles/Quiz.module.scss";

export const Result = () => {
  //--> Hooks

  const {
    state: { correctAnwers, totalQuestions },
    setRestartQuiz,
  } = useContext(QuizContext);

  //--> Renders

  return (
    <>
      <div className={style["background-modal"]} />
      <div className={`${style["modal"]} ${style["active-modal"]}`}>
        <h1>Congrats!</h1>
        <p>
          You answered {((correctAnwers / totalQuestions) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <button type="button" onClick={setRestartQuiz}>
          PLay again
        </button>
      </div>
    </>
  );
};
