import { instance } from '../api/Axios';

export const getUserInfo = async (member_seq) => {
  const response = await instance.get(`/members/${member_seq}`);
  return response.data;
};

export const submitSurvey = async (member_sep, form) => {
  const response = await instance.post(`members/${member_sep}/survey`, {form: form});
  return response
}