import { instance } from '../api/Axios';


export const getRecipeList = async (ingredient) => {
  const response = await instance.post('/recipes/ingredient_choices', ingredient, {
    params: {
      limit: 10,
      offset: 0
    },
  });
  return response.data;
};