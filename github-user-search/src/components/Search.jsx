import React, { useState } from 'react';
import { fetchAdvancedSearchResults } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const query = {
        username,
        location,
        minRepos,
      };
      const results = await fetchAdvancedSearchResults(query);
      setUsers(results.items);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <form onSubmit={handleFormSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg shadow">
        <div>
          <label className="block text-gray-700">GitHub Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border-gray-300 rounded px-3 py-2"
            placeholder="Enter GitHub username"
          />
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border-gray-300 rounded px-3 py-2"
            placeholder="Enter location"
          />
        </div>
        <div>
          <label className="block text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full border-gray-300 rounded px-3 py-2"
            placeholder="Minimum repo count"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button

