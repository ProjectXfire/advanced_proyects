import React, { useContext } from "react";
// Context
import { QuizContext } from "../context";
// Styles
import style from "styles/Quiz.module.scss";

export const Question = () => {
  //--> Hooks

  const {
    state: { questions, totalQuestions, currentQuestion },
    setNextQuestion,
  } = useContext(QuizContext);

  //--> Methods

  const shuffleQuestions = () => {
    const answers = [
      questions[currentQuestion].correct_answer,
      ...questions[currentQuestion].incorrect_answers,
    ];
    return answers.sort(() => Math.random() - 0.5);
  };

  //--> Renders

  return (
    <div className={style["questions"]}>
      <p className={style["questions__counter"]}>
        Questions: {currentQuestion + 1}/{totalQuestions}
      </p>
      <h2
        className={style["questions__question"]}
        dangerouslySetInnerHTML={{
          __html: questions[currentQuestion].question,
        }}
      />
      <div className={style["questions_answers"]}>
        {shuffleQuestions().map((answer) => (
          <button
            key={answer}
            type="button"
            dangerouslySetInnerHTML={{
              __html: answer,
            }}
            onClick={() =>
              setNextQuestion(answer, questions[currentQuestion].correct_answer)
            }
          />
        ))}
      </div>
      <div className={style["questions__next"]}>
        <button type="button" onClick={() => setNextQuestion()}>
          Skip question
        </button>
      </div>
    </div>
  );
};
