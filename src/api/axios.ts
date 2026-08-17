import axios from 'axios';
import { logger } from '../lib/logger';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    logger.info(`Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    logger.error('Request Error', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    logger.info(`Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    logger.error('Response Error', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
