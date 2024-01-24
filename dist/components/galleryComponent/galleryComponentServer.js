"use strict";

function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
//////////////////////////////////////////////////////////////////////////////
////////////////////////////// SERVER SETUP //////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

require('dotenv').config(); // Load environment variables from the .env file
const express = require('express'); // Imports Express
const path = require('path'); // Imports path for using file paths
const cors = require('cors'); // Middleware makes it possible to make request from different domains
const app = express(); // Creating Express app
const PORT = 3000; // The port the server will be running on

app.use(cors());

//////////////////////////////////////////////////////////////////////////////
////////////////////////////// API INFO ROUTE ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////

app.get('/api/info', (req, res) => {
  res.send({
    Hello: "Welcome to Andreas photogallery API",
    Routes: [{
      "/api/info": "API Info"
    }, {
      "/api/search": "Search Flickr API"
    }]
  });
});

//////////////////////////////////////////////////////////////////////////////
////////////////////////////// API SEARCH ROUTE //////////////////////////////
//////////////////////////////////////////////////////////////////////////////

app.get('/api/search', async (req, res) => {
  try {
    // Get the Flickr API key from the .env-file
    const apiKey = process.env.FLICKR_API_KEY;

    // Get Flicker-specific search parameters from the request or use defaults
    const searchWords = req.query.text || 'cygni'; // Input text or initial word
    const photosPerPage = 25; // Number of photos per page
    const page = req.query.page || 1; // Starting page

    // Use dynamic import instead of require for better ES module support
    const {
      default: fetch
    } = await Promise.resolve().then(() => _interopRequireWildcard(require('node-fetch')));

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
    res.status(500).json({
      error: 'Internal Server Error',
      details: error.message
    });
  }
});

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////// STARTS SERVER ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server is up and running and visible on port ${PORT}`);
});