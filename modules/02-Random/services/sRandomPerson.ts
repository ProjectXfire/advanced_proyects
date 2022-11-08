import axios from "axios";
// Interfaces
import { PersonResult } from "../interfaces";

export const getRandomPerson = async () => {
  const response = await axios.get<PersonResult>("https://randomuser.me/api/");
  return response.data.results;
};
