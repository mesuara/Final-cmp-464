// SearchSection.jsx
import React, { useState } from 'react';
import axios from 'axios';
import CatCard from './CatCard'; // Assuming you have a CatCard component

const SearchSection = () => {
  const [catCount, setCatCount] = useState(1);
  const [catImages, setCatImages] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/randomCats', {
        params: {
          count: catCount,
        },
      });
      setCatImages(response.data);
      console.log(response)
    } catch (error) {
      console.error('Error fetching random cat images:', error.message);
    }
  };

  return (
    <div>
      <h1>Random Cat Images</h1>
      <div className="mb-3">
        <label htmlFor="catCount">Number of Cat Images:</label>
        <input
          type="number"
          id="catCount"
          className="form-control"
          value={catCount}
          onChange={(e) => setCatCount(e.target.value)}
        />
      </div>
      <button className="btn btn-success" onClick={handleSearch}>
        Get Random Cats
      </button>
      <div className="mt-3">
        {catImages.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
