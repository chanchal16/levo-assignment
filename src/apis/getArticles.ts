import axios from "axios";
import { Article } from "../components/Article/article.types";

export const getArticlesData = async (page: number): Promise<Article[]> => {
  return await axios
    .get(
      `https://api.spaceflightnewsapi.net/v4/articles?limit=9&offset=${page}`
    )
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => console.error(err));
};
