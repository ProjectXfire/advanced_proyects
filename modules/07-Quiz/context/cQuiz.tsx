import { createContext, ReactNode, useReducer } from "react";
// Interfaces
import { IQuestion } from "../interfaces";
// Reducers
import { QuizReducer } from "./rQuiz";
// Temp Data
import { questionsResponse } from "../tempData";
import { getQuestions } from "../services";

export interface QuizState {
  questions: IQuestion[];
  currentQuestion: number;
  correctAnwers: number;
  totalQuestions: number;
  loading: boolean;
  errorMessage: string;
  startQuiz: boolean;
  endQuiz: boolean;
}

const QuizInitState: QuizState = {
  questions: [],
  correctAnwers: 0,
  currentQuestion: 0,
  totalQuestions: 0,
  loading: false,
  errorMessage: "",
  startQuiz: false,
  endQuiz: false,
};

interface QuizContextProps {
  state: QuizState;
  setQuestions: (amount: number, category: number, difficulty: string) => void;
  setNextQuestion: (answer?: string, correctAnswer?: string) => void;
  setRestartQuiz: () => void;
}

export const QuizContext = createContext({} as QuizContextProps);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  //--> Hooks

  const [state, dispatch] = useReducer(QuizReducer, QuizInitState);

  //--> Methods

  const setQuestions = async (
    amount: number,
    category: number,
    difficulty: string
  ) => {
    try {
      dispatch({ type: "startLoading" });
      const { results } = await getQuestions(amount, category, difficulty);
      dispatch({
        type: "setQuestions",
        payload: { questions: results, totalQuestions: results.length },
      });
      dispatch({ type: "finishLoading" });
    } catch (error: any) {
      dispatch({ type: "finishLoading" });
      dispatch({ type: "setErrorMessage", payload: error.message });
    }
  };

  const setNextQuestion = (answer?: string, correctAnswer?: string) => {
    if (!(state.currentQuestion < state.totalQuestions - 1)) {
      if (answer === correctAnswer) {
        dispatch({ type: "incrementCorrectAnswers" });
      }
      dispatch({ type: "finishQuiz" });
      return;
    }
    if (answer !== undefined && correctAnswer !== undefined) {
      if (answer === correctAnswer) {
        dispatch({ type: "incrementCorrectAnswers" });
      }
    }
    dispatch({ type: "nextQuestion" });
  };

  const setRestartQuiz = () => {
    dispatch({ type: "restart" });
  };

  //--> Renders

  return (
    <QuizContext.Provider
      value={{ state, setQuestions, setNextQuestion, setRestartQuiz }}
    >
      {children}
    </QuizContext.Provider>
  );
};
