// src/components/CatImageList.jsx
import React from 'react';
import CatCard from './CatCard';

const CatImageList = ({ animals, viewMode }) => {
  const renderAnimals = () => {
    if (viewMode === 'grid') {
      return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          {animals.map((animal) => (
            <div key={animal.id} className="col">
              <CatCard animal={animal} />
            </div>
          ))}
        </div>
      );
    } else if (viewMode === 'list') {
      return (
        <div className="mt-3">
          {animals.map((animal) => (
            <div key={animal.id} className="mb-3">
              <CatCard animal={animal} />
            </div>
          ))}
        </div>
      );
    }
  };

  return renderAnimals();
};

export default CatImageList;
