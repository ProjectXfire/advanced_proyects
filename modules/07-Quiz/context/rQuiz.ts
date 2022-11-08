import { IQuestion } from "../interfaces";
import { QuizState } from "./cQuiz";

type Actions =
  | {
      type: "setQuestions";
      payload: {
        questions: IQuestion[];
        totalQuestions: number;
      };
    }
  | { type: "startLoading" }
  | { type: "finishLoading" }
  | { type: "setErrorMessage"; payload: string }
  | { type: "nextQuestion" }
  | { type: "incrementCorrectAnswers" }
  | { type: "finishQuiz" }
  | { type: "restart" };

export const QuizReducer = (state: QuizState, action: Actions): QuizState => {
  switch (action.type) {
    case "setQuestions":
      return {
        ...state,
        questions: action.payload.questions,
        totalQuestions: action.payload.totalQuestions,
        startQuiz: true,
      };
    case "startLoading":
      return {
        ...state,
        loading: true,
        errorMessage: "",
      };
    case "finishLoading":
      return {
        ...state,
        loading: false,
      };
    case "setErrorMessage":
      return { ...state, errorMessage: action.payload };
    case "nextQuestion":
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    case "incrementCorrectAnswers":
      return { ...state, correctAnwers: state.correctAnwers + 1 };
    case "finishQuiz":
      return { ...state, endQuiz: true };
    case "restart":
      return {
        ...state,
        endQuiz: false,
        correctAnwers: 0,
        currentQuestion: 0,
        questions: [],
        startQuiz: false,
      };
    default:
      return state;
  }
};
