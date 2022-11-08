// External libraries
import axios from "axios";
// Interfaces
import { Follower } from "../interfaces";

export const getAllFollowers = async () => {
  const res = await axios.get<Follower[]>(
    "https://api.github.com/users/john-smilga/followers?per_page=100"
  );
  return res.data;
};
