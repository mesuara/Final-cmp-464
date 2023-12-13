const express = require('express');
const axios = require('axios');
const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 3000;
app.use(express.json());
const apiKey = 'kHX2QuNIC3tjRUl1D4HFVSMsUs1r00DA'
app.get('/api/random', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.giphy.com/v1/gifs/random',
      {
        params: {
          api_key: apiKey,
        },
      }
    );
    res.json(response.data);
    console.log("inside index.js",response.data)
  } catch (error) {
    console.error('Error fetching random GIF:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Search query is required.' });
  }

  try {
    const response = await axios.get(
      'https://api.giphy.com/v1/gifs/search',
      {
        params: {
          api_key: apiKey,
          q: query,
        },
      }
    );
    res.json(response.data);
    console.log("inside index.js",response.data)
  } catch (error) {
    console.error('Error searching for GIFs:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
