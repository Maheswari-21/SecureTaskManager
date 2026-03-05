import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});


export const createTask = (data) => API.post("/tasks/create", data);

export const getTasks = () => API.get("/tasks/get");

export const updateTask = (id, data) =>
  API.put(`/tasks/update/${id}`, data);

export const deleteTask = (id) =>
  API.delete(`/tasks/delete/${id}`);

export default API;
