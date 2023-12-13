// CatCard.jsx
import React from 'react';

const CatCard = ({ cat }) => {
  return (
    <div className="card">
      <img src={cat.url} className="card-img-top" alt="Random Cat" />
      <div className="card-body">
        <h5 className="card-title">ID: {cat.id}</h5>
        <p className="card-text">
          <strong>Lifespan:</strong> {cat.lifespan || 'N/A'}
        </p>
        <p className="card-text">
          <strong>Temperament:</strong> {cat.temperament || 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default CatCard;
