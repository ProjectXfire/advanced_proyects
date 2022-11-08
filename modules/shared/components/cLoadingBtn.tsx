import React from "react";
// Styles
import style from "styles/Home.module.scss";

export const LoadingBtn = () => {
  return (
    <button disabled className={style["loading-btn"]}>
      <div className={`${style["lds-ellipsis"]}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
  );
};
