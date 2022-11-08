export const getPagesIndex = (dataPerPages: number, currentPage: number) => {
  const start = dataPerPages * currentPage - dataPerPages;
  const end = start + dataPerPages;
  return {
    start,
    end,
  };
};
