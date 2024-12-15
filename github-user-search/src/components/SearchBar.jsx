import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub users"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
