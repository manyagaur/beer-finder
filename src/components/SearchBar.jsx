import React, { useState } from 'react';

function SearchBar({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a beer..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button type="button" onClick={() => setSearchTerm(inputValue)}>Search</button>
    </div>
  );
}

export default SearchBar;
