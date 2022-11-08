import React, { useEffect, useState } from "react";
import NextImage from "next/image";
// Interfaces
import { Follower } from "../interfaces";
// Services
import { getAllFollowers } from "../services";
// Helpers
import { getPagesIndex } from "../helpers";
// Styles
import style from "styles/Pagination.module.scss";
// Components
import { Pagination } from "./cPagination";

const DATA_PER_PAGE = 10;

export const Followers = () => {
  //--> Hooks

  const [followers, setFollowers] = useState<Follower[]>([]);
  const [followersByPage, setFollowersByPage] = useState<Follower[]>([]);

  //--> Methods

  const currentPage = (page: number) => {
    const { start, end } = getPagesIndex(DATA_PER_PAGE, page);
    const nextData = followers.slice(start, end);
    setFollowersByPage(nextData);
  };

  //--> Effects

  useEffect(() => {
    getAllFollowers().then((data) => {
      setFollowers(data);
      setFollowersByPage(data.slice(0, 10));
    });
  }, []);

  //--> Renders

  return (
    <section className={style["followers-container"]}>
      {followersByPage.map((follower) => (
        <article key={follower.id} className={style["follower"]}>
          <NextImage
            width={100}
            height={100}
            src={follower.login}
            alt={follower.login}
            loader={() => follower.avatar_url}
          />
          <p>{follower.login}</p>
          <button>View Profile</button>
        </article>
      ))}
      <Pagination
        pages={followers.length / DATA_PER_PAGE}
        getCurrentPage={currentPage}
      />
    </section>
  );
};
