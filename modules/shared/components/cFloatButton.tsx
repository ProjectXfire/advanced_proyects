import React from "react";
import NextLink from "next/link";
// Styles
import style from "styles/Home.module.scss";

export const FloatButton = () => {
  return (
    <NextLink className={style["float-button"]} href="/">
      Home
    </NextLink>
  );
};
