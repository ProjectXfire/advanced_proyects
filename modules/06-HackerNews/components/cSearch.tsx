import React, { useContext, useState } from "react";
// Contexts
import { HackerNewsContext } from "../context";
// Styles
import style from "styles/HackerNew.module.scss";

export const Search = () => {
  //--> Hooks

  const [term, setTerm] = useState("");
  const { setData } = useContext(HackerNewsContext);

  //--> Methods

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!term) {
      setData(0);
      return;
    }
    setData(0, term);
  };

  //--> Renders

  return (
    <form onSubmit={onSubmit}>
      <input
        className={style["search"]}
        type="text"
        placeholder="Search news"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className={style["search-btn"]} type="submit"></button>
    </form>
  );
};
