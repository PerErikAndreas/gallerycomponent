"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URLS = void 0;
// Url for the local galleryComponet-api server.
// Change this if you deploy this application.
const BASE_URL = 'http://localhost:3000';

// Url for the local galleryComponet-api server. + endpoint.
const API_URLS = exports.API_URLS = {
  SEARCH: `${BASE_URL}/api/search`
};