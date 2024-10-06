import { CreateAxiosDefaults } from "axios";

export const axiosConfig:CreateAxiosDefaults = {
    baseURL:import.meta.env.VITE_BASE_URL
}