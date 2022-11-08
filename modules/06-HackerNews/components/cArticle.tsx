import React, { FC } from "react";
import NextLink from "next/link";
// Styles
import style from "styles/HackerNew.module.scss";

interface Props {
  title: string;
  author: string;
  points: number;
  comments: number;
  url: string;
}

export const Article: FC<Props> = ({
  author,
  comments,
  points,
  title,
  url,
}) => {
  return (
    <article className={style["article"]}>
      <p>{title}</p>
      <p>
        {points} points by {author} | {comments} comments
      </p>
      <div className={style["article__actions"]}>
        <NextLink href={url} target="_blank">
          Read more
        </NextLink>
      </div>
    </article>
  );
};
