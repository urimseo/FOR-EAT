import instance from '../api/Axios';


export const kakaoLogin = async (code) => {
  const response = await instance.post('http://localhost:8000/members/kakao/login', { code: code });
  // console.log(response.data.data.access_token)
  if (response.data.data.access_token) {
    localStorage.setItem('user', JSON.stringify(response.data.data.access_token));
  }
  return response.data;
};

export const googleLogin = async (data, token) => {
  // console.log(data)
  const response = await instance.post('http://localhost:8000/members/google/login', { data: data });
  if (token) {
    localStorage.setItem('user', JSON.stringify(token));
  }
  return response.data;
};