import axios from 'axios';


const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${
      localStorage.getItem("access_token")
    }`,
  },
});

export default instance;