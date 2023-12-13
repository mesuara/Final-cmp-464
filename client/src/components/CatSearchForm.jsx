// src/components/CatSearchForm.jsx
import React from 'react';

const CatSearchForm = ({ catCount, setCatCount, handleSearch }) => {
  return (
    <div>
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
    </div>
  );
};

export default CatSearchForm;
