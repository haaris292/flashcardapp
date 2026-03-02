import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000"
});

export const getCategories = () => API.get("/categories");
export const getWords = (category) =>
  API.get(`/category/${category}`);
