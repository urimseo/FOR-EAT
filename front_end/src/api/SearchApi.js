import { instance } from "../api/Axios";

// /recipes/search?word=beef&limit=18&offset=0

export const getSearchList = async (page, word) => {
  const response = await instance.get(`/recipes/search`, {
    params: {
      word: word,
      limit: 18,
      offset: 18 * (page - 1),
    },
  });
  return response.data;
};