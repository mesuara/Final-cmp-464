// index.js (Server Side)
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/randomAnimals', async (req, res) => {
  try {
    const apiBaseUrl = req.query.animalType === 'dog' ? 'https://api.thedogapi.com' : 'https://api.thecatapi.com';
    const response = await axios.get(`${apiBaseUrl}/v1/images/search`, {
      params: {
        limit: req.query.count || 1,
        size: 'full',
      },
    });

    const animals = response.data.map((animal) => ({
      id: animal.id,
      imageUrl: animal.url,
    }));

    res.json(animals);
  } catch (error) {
    console.error(`Error fetching random animals: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
