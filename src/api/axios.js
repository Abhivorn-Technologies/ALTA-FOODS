import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Automatically attach the JWT token to every request
api.interceptors.request.use((config) => {
  // Assuming you saved the token in localStorage upon login
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

export const createProduct = async (formData) => {
  // Remember to send multipart/form-data because of the image!
  const response = await api.post("/products/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};
