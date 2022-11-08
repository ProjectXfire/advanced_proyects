import React, { useContext } from "react";
// Contexts
import { QuizContext } from "../context";
// Styles
import style from "styles/Quiz.module.scss";
// Components
import { Setup } from "./cSetup";
import { Question } from "./cQuestion";
import { Result } from "./cResult";

export const Quiz = () => {
  //--> Hooks

  const {
    state: { startQuiz, endQuiz },
  } = useContext(QuizContext);

  //--> Renders

  return (
    <section className={style["quiz-container"]}>
      {startQuiz ? <Question /> : <Setup />}
      {endQuiz && <Result />}
    </section>
  );
};
