import axios from "axios";
import { axiosConfig } from "./axios.config";

export const AxiosInstance = axios.create(axiosConfig);
 const token_key = import.meta.env.VITE_TOKEN_KEY

AxiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem(token_key);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
