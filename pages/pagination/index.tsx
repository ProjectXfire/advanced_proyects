import React from "react";
// Components
import { Layout } from "modules/shared/components";
import { Followers } from "modules/03-Pagination/components";

const PaginationPage = () => {
  return (
    <Layout title="Pagination App" content="pagination">
      <h1>Pagination</h1>
      <Followers />
    </Layout>
  );
};

export default PaginationPage;
