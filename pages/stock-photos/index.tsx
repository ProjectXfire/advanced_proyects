import React from "react";
// Components
import { Layout } from "modules/shared/components";
import { PhotosList } from "modules/04-Photos/components";

const StockPhotosPage = () => {
  return (
    <Layout title="Stock Photos App" content="stock photos">
      <h1>Stock Photos</h1>
      <PhotosList />
    </Layout>
  );
};

export default StockPhotosPage;
