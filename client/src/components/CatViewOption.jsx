// src/components/CatViewOption.jsx
import React from 'react';

const CatViewOption = ({ view, setView }) => {
  return (
    <div className="mb-3">
      <label>View:</label>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="viewOptions"
          id="listView"
          value="list"
          checked={view === 'list'}
          onChange={() => setView('list')}
        />
        <label className="form-check-label" htmlFor="listView">
          List
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="viewOptions"
          id="gridView"
          value="grid"
          checked={view === 'grid'}
          onChange={() => setView('grid')}
        />
        <label className="form-check-label" htmlFor="gridView">
          Grid
        </label>
      </div>
    </div>
  );
};

export default CatViewOption;
