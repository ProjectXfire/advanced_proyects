import React, { useState } from "react";
// External libraries
import ReactMarkdown from "react-markdown";
// Styles
import style from "styles/Markdown.module.scss";

export const Markdown = () => {
  //--> Hooks

  const [markdown, setMarkdown] = useState("");

  //--> Renders

  return (
    <section className={style["section"]}>
      <textarea
        name="markdown"
        onChange={(e) => setMarkdown(e.target.value)}
        defaultValue={markdown}
      ></textarea>
      <div className={style["preview"]}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </section>
  );
};
