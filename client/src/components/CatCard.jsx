// GifCard.js
import React from 'react';

const CatCard = ({ gif }) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={gif.images.original.url} className="card-img-top" alt={gif.title} />
      <div className="card-body">
        <h5 className="card-title">{gif.title}</h5>
      </div>
    </div>
  );
};

export default CatCard;
