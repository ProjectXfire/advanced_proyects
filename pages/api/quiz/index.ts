import type { NextApiRequest, NextApiResponse } from "next";
// External libraries
import axios from "axios";
// Interfaces
import { IQuestionsResponse } from "modules/07-Quiz/interfaces";

type Data = IQuestionsResponse | { message: string };

export default function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getQuestions(req, res);
    default:
      return res.status(400).json({ message: "Invalid request" });
  }
}

async function getQuestions(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { amount, category, difficulty } = req.query;
    const response = await axios.get<IQuestionsResponse>(
      `${process.env.OPENTDB_URL}//api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
    );
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}
