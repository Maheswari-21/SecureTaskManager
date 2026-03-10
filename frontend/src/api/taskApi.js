import axios from "axios";

const API = axios.create({
  baseURL: "https://securetaskmanager-api-66bj.onrender.com/api",
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
export const updateTask = (id, data) => API.put(`/tasks/update/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/delete/${id}`);


