import React from "react";
// Components
import { Layout } from "modules/shared/components";
import { Markdown } from "modules/01-Markdown/components";

const MarkdownPage = () => {
  return (
    <Layout title="Markdown App" content="markdown">
      <Markdown />
    </Layout>
  );
};

export default MarkdownPage;
