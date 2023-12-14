// src/components/CatDogDropdown.jsx
import React from 'react';

const CatDogDropdown = ({ selectedOption, onOptionChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="catDogDropdown" className="form-label">
        Choose an Animal:
      </label>
      <select
        className="form-select"
        id="catDogDropdown"
        value={selectedOption}
        onChange={(e) => onOptionChange(e.target.value)}
      >
        <option value="randomCat">Random Cat</option>
        <option value="randomDog">Random Dog</option>
      </select>
    </div>
  );
};

export default CatDogDropdown;
