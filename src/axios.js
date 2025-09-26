import axios from "axios";
import { baseURL } from "./URL";

// Create an axios instance with default config
export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// // Add request interceptor to modify headers for POST requests
// api.interceptors.request.use((config) => {
//   if (config.method === "post") {
//     config.headers = {
//       ...config.headers,
//       userId: user?.userId,
//       token: user?.token,
//     };
//   }
//   return config;
// });
