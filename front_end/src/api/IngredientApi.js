import { instance } from '../api/Axios';

export const getIngredientRecipeList = async (page, ingredient) => {
  const response = await instance.post('/recipes/ingredient_choices', ingredient, {
    params: {
      limit: 8,
      offset: 8*(page-1)
    },
  });
  return response.data;
};