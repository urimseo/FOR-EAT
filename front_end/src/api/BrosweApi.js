import { instance } from '../api/Axios';


export const getBrowseList = async (page, keyword) => {
  const response = await instance.get('/recipes/browse', {
    params: {
      keyword: keyword,
      limit: 18,
      offset: 18*(page-1)
    },
  });
  return response.data;
};