// SearchSection.jsx
import React, { useState } from 'react';
import axios from 'axios';
import GifCard from './GifCard';

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/search', {
        params: {
          query: searchQuery,
        },
      });
      setSearchResults(response.data.data);
    } catch (error) {
      console.error('Error searching for GIFs:', error.message);
    }
  };

  return (
    <div>
      <h1>Search GIFs</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button className="btn btn-success" onClick={handleSearch}>
        Search
      </button>
      <div className="mt-3">
        {/* Use optional chaining to handle potential undefined searchResults */}
        {searchResults?.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
