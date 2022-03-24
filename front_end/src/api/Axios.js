import axios from 'axios';


export const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${
      localStorage.getItem("access_token")
    }`,
  },
});


export const fileInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${
      localStorage.getItem("access_token")
    }`,
  },
})