import { instance } from '../api/Axios';


export const getUserInfo = async (member_seq) => {
  const response = await instance.get(`/members/${member_seq}`);
  return response.data;
};
