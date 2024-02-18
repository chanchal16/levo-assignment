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
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getArticlesData = async () => {
      await axios
        .get(
          `https://api.spaceflightnewsapi.net/v4/articles?limit=9&offset=${page}`
        )
        .then((res) => {
          if (page === 0 && articles.length === 0) {
            setArticles(res.data.results);
          } else {
            setArticles((prevArticles) => [
              ...prevArticles,
              ...res.data.results,
            ]);
          }
        })
        .catch((err) => console.error(err));
    };
    getArticlesData();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 justify-center items-stretch">
        {articles?.map((article: Article) => {
          return (
            <div
              className="bg-cream px-4 py-5 flex flex-col gap-2  justify-self-center hover:shadow-md"
              key={article.id}
            >
              <span className="text-blue">
                {new Date(article.published_at).toLocaleDateString()}
              </span>
              <h2 className="text-lg font-semibold text-brown">
                {article.title}
              </h2>
              <p className=" line-clamp-3 text-black grow">{article.summary}</p>
              <a href={article.url} target="_blank">
                <button className="p-2 max-w-fit border-2 border-blue text-blue hover:bg-blue hover:text-[#fff] ">
                  Read more
                </button>
              </a>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleLoadMore}
        className="py-2 px-4 max-w-fit mx-auto mt-8 border-2 border-blue text-blue hover:bg-blue hover:text-[#fff] "
      >
        Load more
      </button>
    </>
  );
};

export default Articles;
