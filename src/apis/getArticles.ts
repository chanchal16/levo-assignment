import axios from "axios";
import { Article } from "../components/Article/article.types";

export const getArticlesData = async (page: number): Promise<Article[]> => {
  try {
    const response = await axios.get(
      `https://api.spaceflightnewsapi.net/v4/articles?limit=9&offset=${page}`
    );
    return response?.data?.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
