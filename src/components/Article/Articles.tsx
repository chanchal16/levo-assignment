import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import Skeleton from "../Skeleton";
import { getArticlesData } from "../../apis/getArticles";
import { Article } from "./article.types";

const Articles = () => {
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const articlesData = await getArticlesData(page);
      if (page === 0 && articles.length === 0) {
        setArticles(articlesData);
      } else {
        setArticles((prevArticles) => [...prevArticles, ...articlesData]);
      }
    };
    fetchData();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {articles.length === 0 ? (
        <Skeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 justify-center items-stretch">
          {articles?.map((article: Article) => {
            return <ArticleCard {...article} />;
          })}
        </div>
      )}
      {!!articles.length && (
        <button
          onClick={handleLoadMore}
          className="py-2 px-4 max-w-fit mx-auto mt-8 border-2 border-blue text-blue hover:bg-blue hover:text-[#fff] "
        >
          Load more
        </button>
      )}
    </>
  );
};

export default Articles;
