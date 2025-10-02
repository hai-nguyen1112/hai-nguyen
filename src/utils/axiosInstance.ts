import axios from 'axios';

export const apiUrl = 'https://hai-nguyen-api.onrender.com';

export const axiosInstance = axios.create({
  baseURL: `${apiUrl}/api/v1`,
});
