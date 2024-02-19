import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import Skeleton from "../Skeleton";
import { getArticlesData } from "../../apis/getArticles";
import { Article } from "./article.types";

const Articles = () => {
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const articlesData = await getArticlesData(page);
      if (page === 0 && articles.length === 0) {
        setArticles(articlesData);
      } else {
        setArticles((prevArticles) => [...prevArticles, ...articlesData]);
      }
      setLoading(false);
    };
    fetchArticles();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {loading && <Skeleton />}
      {!loading && articles.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 justify-center items-stretch">
          {articles?.map((article: Article) => {
            return <ArticleCard {...article} key={article.id} />;
          })}
        </div>
      )}
      {!!articles.length && !loading && (
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
