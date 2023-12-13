// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import CatImageList from './components/CatImageList';
import CatViewOption from './components/CatViewOption';
import CatSearchForm from './components/CatSearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [catCount, setCatCount] = useState(1);
  const [catImages, setCatImages] = useState([]);
  const [view, setView] = useState('grid'); // 'list' or 'grid'

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
      <h1 className="mt-3">Random Cat Images</h1>
      <CatViewOption view={view} setView={setView} />
      <CatSearchForm catCount={catCount} setCatCount={setCatCount} handleSearch={handleSearch} />
      <CatImageList catImages={catImages} view={view} />
    </div>
  );
};

export default App;
