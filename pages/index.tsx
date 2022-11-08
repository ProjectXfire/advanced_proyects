import React from "react";
// Styles
import style from "styles/Home.module.scss";
// Components
import { Projects, Layout } from "../modules/shared/components";

const AdvancedProyectsPage = () => {
  return (
    <Layout title="Advanced Projects" content="advanced projects">
      <h1 className={style["home-title"]}>Advanced Proyects</h1>
      <Projects />
    </Layout>
  );
};

export default AdvancedProyectsPage;
