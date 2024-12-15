import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Ensure this is correctly imported

const Search = () => {
  const [username, setUsername] = useState(""); // For capturing input
  const [userData, setUserData] = useState(null); // To store fetched data
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(null); // For handling errors

  // Handle the form submission
  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true
    setError(null); // Reset error state

    try {
      const data = await fetchUserData(username); // Fetch user data from GitHub
      setUserData(data); // Store the fetched data
    } catch (err) {
      setError("Looks like we can't find the user."); // Handle errors
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={onSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="p-2 border-2 border-gray-300 rounded-md mb-4"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md"
          disabled={loading}
        >
          Search
        </button>
      </form>

      {/* Display loading state */}
      {loading && <p>Loading...</p>}

      {/* Display error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display user data */}
      {userData && !loading && !error && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full" />
          <h2 className="text-xl font-bold">{userData.login}</h2>
          <p className="text-gray-600">{userData.name}</p>
          <p className="text-gray-500">Location: {userData.location}</p>
          <p className="text-gray-500">Repositories: {userData.public_repos}</p>
          <a href={userData.html_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>
      )}

      {/* Display multiple users if the API returns more */}
      {userData && Array.isArray(userData.items) && (
        <div className="mt-4">
          {userData.items.map((user) => (
            <div key={user.id} className="p-4 bg-gray-100 rounded-md mb-4">
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <a href={user.html_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                Visit Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
