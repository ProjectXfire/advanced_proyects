import React, { useRef } from "react";
// Data
import { articles } from "../data/articles";
// Styles
import style from "styles/Article.module.scss";
// Components
import { Article } from "./cArticle";

export const DarkMode = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const flag = useRef<boolean>(false);

  const onToggleBgColor = () => {
    if (sectionRef.current && sectionRef.current.style) {
      if (flag.current) {
        sectionRef.current.style.backgroundColor = "white";
        sectionRef.current.style.color = "#030a2e";
        flag.current = false;
        return;
      }
      sectionRef.current.style.backgroundColor = "#030a2e";
      sectionRef.current.style.color = "white";
      flag.current = true;
    }
  };

  return (
    <section ref={sectionRef} className={style["darkmode"]}>
      <div className={style["darkmode__menu"]}>
        <div>Overreacted</div>
        <div>
          <button type="button" onClick={onToggleBgColor}>
            Toggle
          </button>
        </div>
      </div>
      <div className={style["darkmode__articles"]}>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};
