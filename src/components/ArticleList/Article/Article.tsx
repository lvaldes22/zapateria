import Link from "next/link";
import React, { FC } from "react";
import { IArticle } from "../ArticleList";
import Image from 'next/future/image'

interface TProps {
  article: IArticle;
}

const Article: FC<TProps> = ({ article }) => {
  return (
    <div className="bg-indigo-300 text-center">
      <Link href={`/articles/${article.id}`}>
      <Image className="object-cover h-48 w-96 ..."
        src={article.imageURL}
        alt={`${article.name} Articulo`}
        width={300}
        height={300}
      />
      </Link>
      <strong className="text-lg">{article.name}</strong>
    </div>
  );
};

export default Article;
