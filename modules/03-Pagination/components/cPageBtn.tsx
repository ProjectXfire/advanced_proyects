import React, { FC } from "react";
// Styles
import style from "styles/Pagination.module.scss";

interface Props {
  getCurrentPage: (page: number) => void;
  currentPage: number;
  page: number;
  onSelectPage: (page: number) => void;
}

export const PageBtn: FC<Props> = ({
  page,
  currentPage,
  getCurrentPage,
  onSelectPage,
}) => {
  return (
    <button
      className={`${style["pagination-btn"]} ${
        currentPage === page && style["focus"]
      }`}
      onClick={() => {
        getCurrentPage(page);
        onSelectPage(page);
      }}
    >{`${page}`}</button>
  );
};
