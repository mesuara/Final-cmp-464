const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());



app.get('/api/randomCats', async (req, res) => {
    const { count } = req.query;
  
    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search`, {
        params: {
          limit: count || 1,
          include_breeds: 1,
        },
      });
  
      const responseData = response.data || []; // Ensure response.data is defined
  
      const catsWithDetails = responseData.map((cat) => {
        const breed = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0] : {}; // Check if breeds array exists
  
        return {
          id: cat.id,
          url: cat.url,
          lifespan: breed.life_span || 'N/A',
          temperament: breed.temperament || 'N/A',
        };
      });
  
      res.json(catsWithDetails);
    } catch (error) {
      console.error('Error fetching random cat images:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
