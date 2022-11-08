import type { NextApiRequest, NextApiResponse } from "next";
// External libraries
import axios from "axios";
// Interfaces
import { Photo } from "modules/04-Photos/interfaces";

type Data =
  | {
      message: string;
    }
  | Photo[];

export default function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getPhotos(req, res);
    default:
      return res.status(400).json({ message: "Invalid endpoint" });
  }
}

async function getPhotos(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { page, search } = req.query;
    if (!page) {
      return res.status(400).json({
        message: "Page is missing in the query, photos/page=1",
      });
    }
    if (search) {
      const response = await axios.get<Photo[]>(
        `${process.env.UNSPLASH_URL}/search/photos?client_id=${process.env.UNSPLASH_CLIENT_KEY}&page=${page}&query=${search}&per_page=50`
      );
      return res.status(200).json(response.data);
    }
    const response = await axios.get<Photo[]>(
      `${process.env.UNSPLASH_URL}/photos?client_id=${process.env.UNSPLASH_CLIENT_KEY}&page=${page}&per_page=50`
    );
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}
