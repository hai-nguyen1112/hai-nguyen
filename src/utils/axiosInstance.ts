import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://hai-nguyen-api.herokuapp.com/api/v1',
});
