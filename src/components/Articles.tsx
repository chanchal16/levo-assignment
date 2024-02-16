import { useEffect, useState } from "react";
import axios from "axios";

export type Article = {
  id: number;
  featured: boolean;
  url: string;
  news_site: string;
  published_at: string;
  summary: string;
  title: string;
  updated_at: string;
};

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>();

  useEffect(() => {
    (async () => {
      axios
        .get("https://api.spaceflightnewsapi.net/v4/articles")
        .then((res) => {
          //   console.log(res.data)
          setArticles(res.data.results);
        })
        .catch((err) => console.error(err));
    })();
  }, []);
  console.log(articles);
  return (
    <div className="flex flex-wrap gap-6 justify-evenly items-stretch">
      {articles?.map((article: Article) => {
        return (
          <div className="bg-cream p-4 max-w-sm">
            <span>{article.published_at}</span>
            <h2 className="text-lg text-brown">{article.title}</h2>
            <p className=" line-clamp-3">{article.summary}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
