export interface IQuestionsResponse {
  response_code: number;
  results: IQuestion[];
}

export interface IQuestion {
  category: string;
  type: "boolean" | "multiple";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
