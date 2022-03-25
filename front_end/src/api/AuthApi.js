import { instance } from '../api/Axios';


export const kakaoLogin = async (code) => {
  const response = await instance.post('/members/kakao/login', { code: code });
  if (response.data.status === 200) {
    localStorage.setItem('access_token', JSON.stringify(response.data.user.access_token));
  }
  return response.data;
};

export const googleLogin = async (data, token) => {
  const response = await instance.post('/members/google/login', { data: data });
  if (response.data.status === 200) {
    localStorage.setItem('access_token', JSON.stringify(token));
  }
  return response.data;
};