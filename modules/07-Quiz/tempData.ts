import { ICategoriesResponse, IQuestionsResponse } from "./interfaces";

export const questionsResponse: IQuestionsResponse = {
  response_code: 0,
  results: [
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question: "What does a milliner make and sell?",
      correct_answer: "Hats",
      incorrect_answers: ["Shoes", "Belts", "Shirts"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question: "What is the German word for &quot;spoon&quot;?",
      correct_answer: "L&ouml;ffel",
      incorrect_answers: ["Gabel", "Messer", "Essst&auml;bchen"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the romanized Japanese word for &quot;university&quot;?",
      correct_answer: "Daigaku",
      incorrect_answers: ["Toshokan", "Jimusho", "Shokudou"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "medium",
      question: "The French word to travel is &quot;Travail&quot;",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question: "What is a dead mall?",
      correct_answer:
        "A mall with high vacancy rates or low consumer foot traffic",
      incorrect_answers: [
        "A mall with no stores",
        "A mall that has been condemed",
        "A mall after business hours",
      ],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question: "What is the last letter of the Greek alphabet?",
      correct_answer: "Omega",
      incorrect_answers: ["Mu", "Epsilon", "Kappa"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question: "Where did the pineapple plant originate?",
      correct_answer: "South America",
      incorrect_answers: ["Hawaii", "Europe", "Asia"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "medium",
      question: "Haggis is traditionally ate on Burns Night.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question:
        "In ancient Greece, if your job were a &quot;hippeus&quot; which of these would you own?",
      correct_answer: "Horse",
      incorrect_answers: ["Weave", "Guitar", "Boat"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question: "What fast food chain has the most locations globally? ",
      correct_answer: "Subway",
      incorrect_answers: ["Starbucks", "McDonalds", "KFC"],
    },
  ],
};

export const categoriesResponse: ICategoriesResponse = {
  trivia_categories: [
    {
      id: 9,
      name: "General Knowledge",
    },
    {
      id: 10,
      name: "Entertainment: Books",
    },
    {
      id: 11,
      name: "Entertainment: Film",
    },
    {
      id: 12,
      name: "Entertainment: Music",
    },
    {
      id: 13,
      name: "Entertainment: Musicals & Theatres",
    },
    {
      id: 14,
      name: "Entertainment: Television",
    },
    {
      id: 15,
      name: "Entertainment: Video Games",
    },
    {
      id: 16,
      name: "Entertainment: Board Games",
    },
    {
      id: 17,
      name: "Science & Nature",
    },
    {
      id: 18,
      name: "Science: Computers",
    },
    {
      id: 19,
      name: "Science: Mathematics",
    },
    {
      id: 20,
      name: "Mythology",
    },
    {
      id: 21,
      name: "Sports",
    },
    {
      id: 22,
      name: "Geography",
    },
    {
      id: 23,
      name: "History",
    },
    {
      id: 24,
      name: "Politics",
    },
    {
      id: 25,
      name: "Art",
    },
    {
      id: 26,
      name: "Celebrities",
    },
    {
      id: 27,
      name: "Animals",
    },
    {
      id: 28,
      name: "Vehicles",
    },
    {
      id: 29,
      name: "Entertainment: Comics",
    },
    {
      id: 30,
      name: "Science: Gadgets",
    },
    {
      id: 31,
      name: "Entertainment: Japanese Anime & Manga",
    },
    {
      id: 32,
      name: "Entertainment: Cartoon & Animations",
    },
  ],
};
