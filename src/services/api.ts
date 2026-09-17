import axios from 'axios';

// Create axios instance with base URL
// In Week 2, this will point to the actual backend API
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Placeholder
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor placeholder
api.interceptors.request.use(
  (config) => {
    // Week 2: Add auth token here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor placeholder
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Week 2: Handle global errors (e.g., 401 Unauthorized)
    return Promise.reject(error);
  }
);

export default api;
