import instance from '../api/Axios';


export const kakaoLogin = async (code) => {
  const response = await instance.post('/members/kakao/login', { code: code });
  if (response.data.data.access_token) {
    localStorage.setItem('user', JSON.stringify(response.data.data.access_token));
  }
  return response.data;
};

export const googleLogin = async (data, token) => {
  const response = await instance.post('/members/google/login', { data: data });
  if (response.data.data.user.status === 200) {
    localStorage.setItem('user', JSON.stringify(token));
  }
  return response.data;
};