import instance from '../api/Axios';


export const getRecipeList = async (page, category) => {
  const response = await instance.get('/recipes/', {
    params: {
      page: page,
      category: category,
    },
  });
  return response.data;
};