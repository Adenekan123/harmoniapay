import { AxiosInstance } from "../axios/axios.instance";

export const fetcher = (url:string) => AxiosInstance.get(url).then(res => res.data)
