import React, { useContext, useEffect } from "react";
// Contexts
import { HackerNewsContext } from "../context";
// Styles
import style from "styles/HackerNew.module.scss";
// Components
import { Article } from "./cArticle";
import { Loading } from "modules/shared/components/cLoading";

export const News = () => {
  //--> Hooks

  const {
    state: { loading, hits },
    setData,
  } = useContext(HackerNewsContext);

  //--> Effects

  useEffect(() => {
    setData(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //--> Renders

  if (loading) return <Loading />;

  return (
    <>
      <section className={style["news"]}>
        {hits.map((hit) => (
          <Article
            key={hit.objectID}
            title={hit.title || ""}
            author={hit.author}
            points={hit.points}
            comments={hit.num_comments || 0}
            url={hit.url || "/hacker-news"}
          />
        ))}
      </section>
    </>
  );
};
