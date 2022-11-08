import React, { FC, useMemo } from "react";
// Helpers
import { formattingDate } from "modules/shared/helpers/dateFormat";
// Styles
import style from "styles/Article.module.scss";
// Data
import { IArticle } from "../data/articles";

interface Props {
  article: IArticle;
}

export const Article: FC<Props> = ({ article }) => {
  //--> Methods

  const formatDate = useMemo(() => {
    const date = formattingDate(article.date.getTime());
    return date;
  }, [article.date]);

  //--> Renders

  return (
    <article className={style["article"]}>
      <h2>{article.title}</h2>
      <p>
        {formatDate} - {article.length} min read
      </p>
      <p>{article.snippet}</p>
    </article>
  );
};
