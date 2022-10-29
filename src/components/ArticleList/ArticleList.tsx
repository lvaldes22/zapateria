import React, { useEffect, useState } from "react";
import Article from "./Article/Article";

export interface IArticle {

  "id": number;
  "name": string;
  "brand": string;
  "gender": string;
  "category": string;
  "price": number;
  "is_in_inventory": boolean;
  "items_left": number;
  "imageURL": string;
  "slug": string;
}

const useArticles = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    // HTTP request -> Rest API -> Real Database
    const url = `${process.env.NEXT_PUBLIC_API_URL}/articles`;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`)
      .then((res) => res.json())
      .then((data: IArticle[]) => setArticles(data.slice(0, 35)))
      .catch((error) => console.error(error));
  }, []);

  return articles;
};

export const ArticleList = () => {
  const articles = useArticles();
  return (
    <div className="flex flex-col justify-center text-white items-center p-6">
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
};
