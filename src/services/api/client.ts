import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_CLIENT = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getApiClient = () => {
  return API_CLIENT;
};
