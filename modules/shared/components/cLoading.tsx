import React from "react";
// Styles
import style from "styles/Home.module.scss";

export const Loading = () => {
  return (
    <div className={`${style["lds-ellipsis"]} ${style["loading-absolute"]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
