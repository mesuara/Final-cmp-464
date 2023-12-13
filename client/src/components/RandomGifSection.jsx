// RandomGifSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GifCard from './CatCard';

const RandomGifSection = () => {
  const [randomGif, setRandomGif] = useState(null);

  useEffect(() => {
    fetchRandomGif();
  }, []);

  const fetchRandomGif = async () => {
    try {
      const response = await axios.get('/api/random');
      console.log(response)
      setRandomGif(response.data.data);
    } catch (error) {
      console.error('Error fetching random GIF:', error.message);
    }
  };

  return (
    <div>
      <h1>Random GIF</h1>
      {randomGif && <GifCard gif={randomGif} />}
      <button className="btn btn-primary mt-3" onClick={fetchRandomGif}>
        Get Random GIF
      </button>
    </div>
  );
};

export default RandomGifSection;
