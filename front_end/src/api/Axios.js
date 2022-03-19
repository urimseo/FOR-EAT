import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    'Content-type': 'application/json',
    // For Spring Boot back-end
    //// Authorization: 'Bearer ' + user.accessToken,
  },
});

export default instance;