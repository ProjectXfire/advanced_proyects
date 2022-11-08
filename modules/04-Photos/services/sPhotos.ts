import axios from "axios";
import { Photo, PhotoResult } from "../interfaces";

export const getPhotos = async (page: number = 1, search?: string) => {
  if (search && search.length > 0) {
    const res = await axios.get<PhotoResult>(
      `api/photos?page=${page}&search=${search}`
    );
    return res.data.results;
  }
  const res = await axios.get<Photo[]>(`api/photos?page=${page}`);
  return res.data;
};
