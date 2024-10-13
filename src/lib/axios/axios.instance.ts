import axios from "axios";
import { axiosConfig } from "./axios.config";

const token_key = import.meta.env.VITE_TOKEN_KEY;

export const AxiosInstance = axios.create(axiosConfig);

AxiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem(token_key);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const setAxiosToken = (token: string) => {
  localStorage.setItem(token_key, token);
};
