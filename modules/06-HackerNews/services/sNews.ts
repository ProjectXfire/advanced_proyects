import axios from "axios";
// Interfaces
import { INewsResponse } from "modules/06-HackerNews/intefaces";

export const getNews = async (page: number, query?: string) => {
  if (!query) {
    const response = await axios.get<INewsResponse>(
      `/api/news?page=${page}&query=${query}`
    );
    return response.data;
  }
  const response = await axios.get<INewsResponse>(
    `/api/news?page=${page}&query=${query}`
  );
  return response.data;
};
