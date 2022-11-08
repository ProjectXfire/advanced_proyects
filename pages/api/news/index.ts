import type { NextApiRequest, NextApiResponse } from "next";
// External libraries
import axios from "axios";
// Interfaces
import { INewsResponse } from "modules/06-HackerNews/intefaces";

type Data = INewsResponse | { message: string };

export default function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getNews(req, res);
    default:
      return res.status(400).json({ message: "Invalid request" });
  }
}

async function getNews(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { page, query } = req.query;
    if (!query) {
      const response = await axios.get<INewsResponse>(
        `${process.env.ALGOLIA_URL}/search?page=${page}`
      );
      return res.status(200).json(response.data);
    }
    const response = await axios.get<INewsResponse>(
      `${process.env.ALGOLIA_URL}/search?page=${page}&query=${query}`
    );
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}
