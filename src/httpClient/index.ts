//TODO: replace with values from secure storage once configured
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
  headers: {
    'content-type': 'application/json',
  },
});
