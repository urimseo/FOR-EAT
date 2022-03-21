import instance from '../api/Axios';

export const getRecipeDetail = async (recipe_seq) => {
  const response = await instance.get(`/recipes/${recipe_seq}`);
  return response.data;
}
