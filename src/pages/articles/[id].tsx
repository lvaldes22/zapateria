import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { IArticle } from "../../components/ArticleList/ArticleList";
import Image from 'next/future/image'

interface TProps {
  article: IArticle;
}

const ArticleDetailPage: NextPage<TProps> = ({ article }) => {
  return (
    <ApplicationWrapper title={article.name}>
      <div className="flex flex-col">
      <div className="flex justify-around ...">
      <strong className="text-lg">{`Descripcion: ${article.name}`}</strong>
      </div>
      <div className="flex justify-around ...">
      <Image className="object-cover h-96 w-120"
        src={article.imageURL}
        alt={`${article.name} Articulo`}
        width={'300'}
        height={'300'}
      />
      </div>
      <div className="flex justify-around ...">
      <strong className="text-lg">{`Precio Unitario: $${article.price}`}</strong>
      </div>
    </div>
    </ApplicationWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/articles/" + context.params?.id
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default ArticleDetailPage;
