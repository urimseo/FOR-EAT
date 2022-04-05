import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

export const setApiHeaders = () => {
  instance.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "access_token"
      )}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
};

export const fileInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});