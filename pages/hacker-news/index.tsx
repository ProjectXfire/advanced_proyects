import React, { useContext } from "react";
// Components
import { Layout, Pagination } from "modules/shared/components";
import { Search, News } from "modules/06-HackerNews/components";
import { HackerNewsContext } from "modules/06-HackerNews/context";

const HackerNewsPage = () => {
  //--> Hooks

  const {
    state: { nbPages, term },
    setData,
  } = useContext(HackerNewsContext);

  //--> Methods

  const handlePage = (page: number) => {
    setData(page - 1, term);
  };

  //--> Renders

  return (
    <Layout title="Hacker News App" content="hacker news">
      <h1>Hacker News</h1>
      <Search />
      <News />
      <Pagination initPage={1} pages={nbPages} getCurrentPage={handlePage} />
    </Layout>
  );
};

export default HackerNewsPage;
