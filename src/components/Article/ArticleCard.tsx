import { Article } from "./article.types";

const ArticleCard = ({ published_at, title, summary, url }: Article) => {
  const publishedDate = new Date(published_at).toLocaleDateString();
  return (
    <article className="bg-cream px-4 py-5 flex flex-col gap-2  justify-self-center hover:shadow-md">
      {published_at && <span className="text-blue">{publishedDate}</span>}
      {title && <h2 className="text-lg font-semibold text-brown">{title}</h2>}
      {summary && <p className=" line-clamp-3 text-black grow">{summary}</p>}
      {url && (
        <a
          href={url}
          target="_blank"
          className="p-2 max-w-fit border-2 border-blue text-blue hover:bg-blue hover:text-[#fff] "
        >
          Read more
        </a>
      )}
    </article>
  );
};

export default ArticleCard;
