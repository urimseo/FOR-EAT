import { instance } from "../api/Axios";

export const getRecipeList = async (page, category) => {
  const response = await instance.get("/recipes/", {
    params: {
      category: category,
      limit: 24,
      offset: 24 * (page - 1),
    },
  });
  return response.data;
};