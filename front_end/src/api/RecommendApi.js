import { instance } from "../api/Axios";

export const getRecommendRecipeList = async (type, page) => {
  const response = await instance.get("/recipes/recommends", {
    params: {
      type: type,
      limit: 15,
      offset: 15 * (page - 1),
    },
  });
  return response.data;
};