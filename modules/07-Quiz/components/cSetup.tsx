import React, { useContext, useState } from "react";
// Styles
import style from "styles/Quiz.module.scss";
// Contexts
import { QuizContext } from "../context";
// Data
import { categoriesResponse } from "../tempData";
// Components
import { LoadingBtn } from "modules/shared/components";

export const Setup = () => {
  //--> Hooks

  const {
    state: { loading },
    setQuestions,
  } = useContext(QuizContext);
  const [formValues, setFormValues] = useState({
    questions: 5,
    category: categoriesResponse.trivia_categories[0].id,
    difficulty: "easy",
  });

  //--> Methods

  const onStartQuiz = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { questions, category, difficulty } = formValues;
    if (!(questions > 0 && questions <= 20)) {
      alert("Range of questions must be > 0 and <= 20");
      return;
    }
    setQuestions(questions, category, difficulty);
  };

  //--> Renders

  return (
    <form className={style["form"]} onSubmit={onStartQuiz}>
      <h1>Setup Quiz</h1>
      <div className={style["group_input"]}>
        <label>Number of questions</label>
        <input
          type="number"
          value={formValues.questions}
          disabled={loading}
          onChange={(e) =>
            setFormValues({ ...formValues, questions: +e.target.value })
          }
        />
      </div>
      <div className={style["group_input"]}>
        <label>Categories</label>
        <select
          disabled={loading}
          onChange={(e) =>
            setFormValues({ ...formValues, category: +e.target.value })
          }
        >
          {categoriesResponse.trivia_categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className={style["group_input"]}>
        <label>Select dificult</label>
        <select
          disabled={loading}
          onChange={(e) =>
            setFormValues({ ...formValues, difficulty: e.target.value })
          }
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      {loading ? <LoadingBtn /> : <button type="submit">Start</button>}
    </form>
  );
};
