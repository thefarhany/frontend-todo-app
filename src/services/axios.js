import axios from "axios";
import { useAuthStore } from "../stores/authStore";

const API = axios.create({
  baseURL: "https://backend-todo.up.railway.app/",
  withCredentials: true,
});

// Response interceptor
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const { logout } = useAuthStore.getState();
      logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default API;
