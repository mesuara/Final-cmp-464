// src/components/CatImageList.jsx
import React from 'react';
import CatCard from './CatCard';

const CatImageList = ({ catImages, view }) => {
  return (
    <div className={`mt-3 ${view === 'grid' ? 'row' : ''}`}>
      {catImages.map((cat) => (
        <div key={cat.id} className={`col-md-${view === 'grid' ? '4' : ''}`}>
          <CatCard cat={cat} />
        </div>
      ))}
    </div>
  );
};

export default CatImageList;
