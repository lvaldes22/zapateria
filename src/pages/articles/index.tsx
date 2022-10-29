import React, { NextPage } from "next";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { ArticleList } from "../../components/ArticleList/ArticleList";

interface TProps {
  response: string;
}

const Articles: NextPage<TProps> = () => {
  return (
    <ApplicationWrapper
      title="Articulos"
      description="Articulos de la zapateria Lewis Albert"
    >
      <ArticleList />
    </ApplicationWrapper>
  );
};

export default Articles;
