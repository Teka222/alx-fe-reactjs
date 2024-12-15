import axios from "axios";

// Fetch GitHub user data based on the username (basic search)
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Fetch GitHub users based on advanced search criteria (location, minRepos)
export const fetchUsersByAdvancedSearch = async (location, minRepos) => {
  try {
    // Construct the search query with location and minimum repositories
    const query = `location:${location} repos:>=${minRepos}`;
    
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data; // Return the list of users found by the query
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Error fetching users");
  }
};
