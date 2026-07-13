import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-url.onrender.com/api",
  withCredentials: true,
});

export const loginUser = (data) =>
  API.post("/auth/login", data);

export const registerUser = (data) =>
  API.post("/auth/register", data);