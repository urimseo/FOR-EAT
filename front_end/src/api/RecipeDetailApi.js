import { instance, fileInstance } from '../api/Axios';
export const getRecipeDetail = async (recipe_seq) => {
  const response = await instance.get(`/recipes/${recipe_seq}`);
  return response.data;
}


export const getReviewList = async (recipe_seq) => {
  const response = await instance.get(`/recipes/${recipe_seq}/reviews/`);
  return response.data;
}


export const createReview = async (recipe_seq, formData) => {
  const response = await fileInstance.post(`/recipes/${recipe_seq}/reviews/`, formData);
  return response.data;
}