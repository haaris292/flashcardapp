import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const getCategories = () => API.get("/categories");
export const getWords = (category) =>
  API.get(`/category/${category}`);
