import { instance, fileInstance } from '../api/Axios';

export const createReview = async (recipe_seq, formData) => {
    const response = await fileInstance.post(`/recipes/${recipe_seq}/reviews`, formData);
    return response;
  }
  
  
export const deleteReview = async (review_id) => {
  const response = await instance.delete(`/recipes/reviews/${review_id}`)
  return response.data;
}