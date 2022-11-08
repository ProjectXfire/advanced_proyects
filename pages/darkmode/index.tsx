import React from "react";
// Components
import { Layout } from "modules/shared/components";
import { DarkMode } from "modules/05-Darkmode/components";

const index = () => {
  return (
    <Layout title="Stock Photos App" content="stock photos">
      <DarkMode />
    </Layout>
  );
};

export default index;
