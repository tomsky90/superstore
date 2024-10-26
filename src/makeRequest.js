import axios from "axios";

export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});
