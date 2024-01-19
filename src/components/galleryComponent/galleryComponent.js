/////////////////////////////////////////////////
//////////////////// IMPORTS ////////////////////
/////////////////////////////////////////////////

import { API_URLS } from './urls.js';

/////////////////////////////////////////////////
//////////////// EVENT LISTENERS ////////////////
/////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  // Get references to other HTML elements where JavaScript elements will be rendered.
  const galleryComponentContainer = document.getElementById("gallerycomponent-gallery-container");
  const loader = document.getElementById("gallerycomponent-loader");
  let currentPage = 1;

  // Create and append the header
  createHeader();

  /////////////////////////////////////////////////
  /////////// CREATE THE STATIC HEADER ////////////
  /////////////////////////////////////////////////

  function createHeader() {

    // HEADER-DIV
    const header = document.createElement("div");
    header.className = "gallerycomponent-header-container";

    // HEADER-INPUT
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "gallerycomponent-header-input";
    searchInput.name = "search-term";
    searchInput.placeholder = "Enter search words";
    searchInput.classList.add("gallerycomponent-header-input");

    // HEADER-BUTTON
    const searchButton = document.createElement("button");
    searchButton.type = "submit";
    searchButton.textContent = "Search";
    searchButton.id = "gallerycomponent-header-button";
    searchButton.classList.add("gallerycomponent-header-button");

    // Append the input and button elements to a form element
    const searchForm = document.createElement("form");
    searchForm.id = "gallerycomponent-header-form";
    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);

    // Append the form to the header
    header.appendChild(searchForm);

    // Append the header to the galleryComponent container
    document.body.appendChild(header);

    // Attach an event listener to the search form
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Reset page number on form submission
      currentPage = 1;

      // Fetch results
      fetchResults();
    });

    // Attach a scroll event listener to the window
    window.addEventListener("scroll", function () {
      // Check if the user has scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Increment the page number and fetch more results
        currentPage++;
        fetchResults();
      }
    });
  }

  /////////////////////////////////////////////////
  /////////////// FETCH THE PHOTOS ////////////////
  /////////////////////////////////////////////////

  // Function to fetch results
  function fetchResults() {
    // Get the trimmed search term from the input field
    const searchTerm = document.getElementById("gallerycomponent-header-input").value.trim();

    // Show loading indicator
    loader.style.display = "block";

    // Make a fetch call to the server using the centralized URL
    fetch(`${API_URLS.SEARCH}?text=${searchTerm}&page=${currentPage}`)
      .then((response) => {
        if (!response.ok) {
          // If the response status is not OK, throw an error
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Return as JSON
      })
      .then((data) => {
        console.log("Data from server and Flickr API:", data);

        // If there's new data, this clears existing photos in the gallery container to an empty string
        galleryComponentContainer.innerHTML = "";

        // Check if data.photos is in an array
        if (Array.isArray(data.photos.photo)) {
          // Iterate over the array and create separate images from the fetched Flickr data
          data.photos.photo.forEach((photo) => {
            const singlePhotoElement = document.createElement("img");
            // Set the source and alt attributes for the image
            singlePhotoElement.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;
            singlePhotoElement.alt = photo.title; // Add alt attribute for accessibility
            singlePhotoElement.classList.add("gallerycomponent-gallery-img")
            galleryComponentContainer.classList.add("gallerycomponent-gallery-container")
            galleryComponentContainer.appendChild(singlePhotoElement); // Adds the singlePhotoElement and makes it a child of the gallery container
          });
        } else {
          console.error("No data error: Photos do not return as an array");
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      })
      .finally(() => {
        // Hide loading indicator regardless of success or failure
        loader.style.display = "none";
      });
  }
});
