import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUser = (username) => {
  return axios.get(`${BASE_URL}/users/${username}`);
};
