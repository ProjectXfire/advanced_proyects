import axios from "axios";
import { IQuestionsResponse } from "../interfaces";

export const getQuestions = async (
  amount: number,
  category: number,
  difficulty: string
) => {
  const response = await axios.get<IQuestionsResponse>(
    `/api/quiz?amount=${amount}&category=${category}&difficulty=${difficulty}`
  );
  return response.data;
};
