import React, { FC, useEffect, useState, useId } from "react";
// Styles
import style from "styles/Pagination.module.scss";
import { PageBtn } from "./cPageBtn";

interface Props {
  pages?: number;
  getCurrentPage: (page: number) => void;
  initPage?: number;
}

interface BtnPage {
  page: number;
  id: number;
}

interface Pagination {
  position: "start" | "middle" | "end";
  maxPages: Array<number>;
}

export const Pagination: FC<Props> = ({
  pages = 1,
  getCurrentPage,
  initPage = 1,
}) => {
  //--> Hooks

  const [btnPages, setBtnPages] = useState<BtnPage[]>([]);
  const [currentPage, setCurrentPage] = useState(initPage);
  const [{ maxPages, position }, setPaginationState] = useState<Pagination>({
    position: "start",
    maxPages: [],
  });

  //--> Methods

  const nextPage = () => {
    const page = Math.min(currentPage + 1, pages);
    setCurrentPage(page);
    getCurrentPage(page);
    if (page > 4 && page + 2 < pages) {
      setPaginationState({
        position: "middle",
        maxPages: [page - 2, page + 1],
      });
      return;
    }
    if (page > 4) {
      setPaginationState({
        position: "end",
        maxPages: [pages - 4],
      });
    }
  };

  const previousPage = () => {
    const page = Math.max(currentPage - 1, 1);
    setCurrentPage(page);
    getCurrentPage(page);
    if (pages - page > 3 && pages - page + 2 < pages) {
      setPaginationState({
        position: "middle",
        maxPages: [page - 2, page + 1],
      });
      return;
    }
    if (pages - page > 3) {
      setPaginationState({
        position: "start",
        maxPages: [0, 4],
      });
    }
  };

  const onSelectPage = (page: number) => {
    setCurrentPage(page);
    if (page > 3 && pages - page > 2) {
      setPaginationState({
        position: "middle",
        maxPages: [page - 2, page + 1],
      });
    }
    if (pages - page <= 2) {
      setPaginationState({
        position: "end",
        maxPages: [pages - 4],
      });
    }
    if (page < 4) {
      setPaginationState({
        position: "start",
        maxPages: [0, 4],
      });
    }
  };

  //--> Effects

  useEffect(() => {
    const buildBtnPages: BtnPage[] = [];
    for (let i = 0; i < pages; i++) {
      buildBtnPages.push({
        page: i + 1,
        id: i,
      });
    }
    setBtnPages(buildBtnPages);
  }, [pages]);

  useEffect(() => {
    setPaginationState({
      position: "start",
      maxPages: pages > 4 ? [0, 4] : [],
    });
  }, [pages]);

  //-- Renders

  return (
    <div className={style["pagination"]}>
      <button
        className={`${style["pagination-btn"]} ${style["arrow"]}`}
        type="button"
        disabled={currentPage === 1}
        onClick={previousPage}
      >
        {"<"}
      </button>
      {pages > 5 ? (
        <>
          {position !== "start" && (
            <>
              {btnPages
                .map((btn) => (
                  <PageBtn
                    key={btn.id}
                    currentPage={currentPage}
                    getCurrentPage={getCurrentPage}
                    onSelectPage={onSelectPage}
                    page={btn.page}
                  />
                ))
                .slice(0, 1)}
              {"..."}
            </>
          )}
          {btnPages
            .map((btn) => (
              <PageBtn
                key={btn.id}
                currentPage={currentPage}
                getCurrentPage={getCurrentPage}
                onSelectPage={onSelectPage}
                page={btn.page}
              />
            ))
            .slice(...maxPages)}

          {position !== "end" && (
            <>
              {"..."}
              {btnPages
                .map((btn) => (
                  <PageBtn
                    key={btn.id}
                    currentPage={currentPage}
                    getCurrentPage={getCurrentPage}
                    onSelectPage={onSelectPage}
                    page={btn.page}
                  />
                ))
                .slice(pages - 1)}
            </>
          )}
        </>
      ) : (
        <>
          {btnPages.map((btn) => (
            <PageBtn
              key={btn.id}
              currentPage={currentPage}
              getCurrentPage={getCurrentPage}
              onSelectPage={onSelectPage}
              page={btn.page}
            />
          ))}
        </>
      )}
      <button
        className={`${style["pagination-btn"]} ${style["arrow"]}`}
        type="button"
        disabled={currentPage === pages}
        onClick={nextPage}
      >
        {">"}
      </button>
    </div>
  );
};
