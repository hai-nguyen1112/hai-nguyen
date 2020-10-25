import axios from 'axios';

export const apiUrl = 'https://hai-nguyen-api.herokuapp.com';

export const axiosInstance = axios.create({
  baseURL: `${apiUrl}/api/v1`,
});
