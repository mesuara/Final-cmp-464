// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [catCount, setCatCount] = useState(1);
  const [catImages, setCatImages] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/randomCats', {
        params: {
          count: catCount,
        },
      });
      setCatImages(response.data);
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
          <img key={cat.id} src={cat.url} alt="Random Cat" style={{ width: '200px', margin: '5px' }} />
        ))}
      </div>
    </div>
  );
};

export default App;
