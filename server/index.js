const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// API endpoint for fetching random cat images
app.get('/api/randomCats', async (req, res) => {
  const { count } = req.query;

  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search`, {
      params: {
        limit: count || 1,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching random cat images:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
