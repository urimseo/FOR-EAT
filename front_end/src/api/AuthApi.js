import instance from '../api/Axios';


export const login = async (code) => {
  console.log(code)
  const response = await instance.post('http://localhost:8000/members/kakao/login', { code: code });
  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};