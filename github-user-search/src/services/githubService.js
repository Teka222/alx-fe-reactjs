import axios from 'axios';

export const fetchAdvancedSearchResults = async ({ username, location, minRepos }) => {
  let query = [];
  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const queryString = query.join('+');
  const url = `https://api.github.com/search/users?q=${queryString}`;

  const response = await axios.get(url);
  return response.data; // Returns users list under `items`
};
