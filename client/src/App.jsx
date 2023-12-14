// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import CatDogDropdown from './components/CatDogDropdown';
import CatImageList from './components/CatImageList';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('randomCat'); // Default to random cat
  const [animals, setAnimals] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // Default to grid view

  useEffect(() => {
    const fetchRandomAnimals = async () => {
      try {
        const apiUrl =
          selectedOption === 'randomCat'
            ? 'http://localhost:5000/api/randomAnimals?animalType=cat&count=10'
            : 'http://localhost:5000/api/randomAnimals?animalType=dog&count=10';

        const response = await axios.get(apiUrl);
        setAnimals(response.data);
      } catch (error) {
        console.error('Error fetching random animals:', error.message);
      }
    };

    fetchRandomAnimals();
  }, [selectedOption]);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'grid' ? 'list' : 'grid'));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-3">Random Animals</h1>
      <CatDogDropdown selectedOption={selectedOption} onOptionChange={setSelectedOption} />
      <button className="btn btn-primary mb-3" onClick={toggleViewMode}>
        {viewMode === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}
      </button>
      <CatImageList animals={animals} viewMode={viewMode} />
    </div>
  );
};

export default App;
