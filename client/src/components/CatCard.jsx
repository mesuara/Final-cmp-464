// src/components/CatCard.jsx
import React from 'react';

const CatCard = ({ animal }) => {
  if (!animal || !animal.imageUrl) {
    return null;
  }

  return (
    <div className="card">
      <img src={animal.imageUrl} className="card-img-top" alt="Cat" />
      <div className="card-body">
        <h5 className="card-title"> Details</h5>
        {/* Add more details if needed */}
      </div>
    </div>
  );
};

export default CatCard;
