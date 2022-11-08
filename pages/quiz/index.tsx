import React from "react";
// Components
import { Layout } from "modules/shared/components";
import { Quiz } from "modules/07-Quiz/components";

const QuizPage = () => {
  return (
    <Layout title="Quiz App" content="quiz">
      <Quiz />
    </Layout>
  );
};

export default QuizPage;
