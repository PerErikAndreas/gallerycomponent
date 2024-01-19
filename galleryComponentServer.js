// Load environment variables from the .env file
require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory (including your index.html)
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// Root route: Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Other API routes
app.get('/api/info', (req, res) => {
  res.send({
    Hello: "Welcome to Andreas photogallery API",
    Routes: [
      { "/api/info": "API Info" },
      { "/api/search": "Search Flickr API" },
    ]
  });
});

// Search route: here we fetch data from Flickr API
app.get('/api/search', async (req, res) => {
  try {
    // Get the Flickr API key from the .env-file
    const apiKey = process.env.FLICKR_API_KEY;

    // Get Flicker-specific search parameters from the request or use defaults
    const searchWords = req.query.text || 'östersund';
    const photosPerPage = 50;
    const page = req.query.page || 1;

    // Use dynamic import instead of require for better ES module support
    const { default: fetch } = await import('node-fetch');

    // Flickr API URL with template strings containing users serachWords and settings for the response
    const flickrApiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchWords}&format=json&nojsoncallback=1&per_page=${photosPerPage}&page=${page}`;

    // Fetch data from Flickr API
    const response = await fetch(flickrApiUrl);
    const data = await response.json();

    // Send the fetched data as JSON response
    res.json(data);
  } catch (error) {
    // Handle errors during the fetch or processing
    console.error('Error:', error);

    // Send a 500 Internal Server Error response with an error message
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Start the server on the specified port at the start of this document
app.listen(PORT, () => {
  console.log(`Server is up and running and visible on port ${PORT}`);
});
