import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission
    setLoading(true);   // Set loading state to true
    setError('');       // Reset error state

    try {
      // Fetch user data using async/await and the GitHub API
      const data = await fetchUserData(searchTerm);
      setUserData(data);  // Set the fetched data
      setLoading(false);   // Set loading to false after fetch is complete
    } catch (err) {
      setLoading(false);  // Set loading to false in case of an error
      setError('Looks like we can\'t find the user');  // Set error message
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter GitHub username"
          className="border p-2 mr-2"
        />
        <button type="submit" className="border p-2 bg-blue-500 text-white">
          Search
        </button>
      </form>

      {/* Conditional rendering for loading */}
      {loading && <p>Loading...</p>}

      {/* Conditional rendering for error */}
      {error && <p>{error}</p>}

      {/* Display user data if available */}
      {userData && !Array.isArray(userData) && (
        <div className="text-center">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-xl">{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <p>Location: {userData.location}</p>
          <p>Repositories: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}

      {/* If userData is an array (for multiple results), map through them */}
      {userData && Array.isArray(userData) && (
        <div className="space-y-4">
          {userData.map((user) => (
            <div key={user.login} className="border p-4 rounded-lg">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <h3 className="text-lg text-center">{user.login}</h3>
              <p className="text-center">Location: {user.location}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-center block mt-2"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


