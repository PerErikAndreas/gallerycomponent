//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// IMPORTS ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

import { API_URLS } from './urls.js';

//////////////////////////////////////////////////////////////////////////////
///////////////////////////// EVENT LISTENERS ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  // Connection for the component container where everything will be rendered.
  const galleryComponent = document.getElementById("galleryComponent");
  let currentPage = 1;

  // Append the galleryComponent to the main container
  galleryComponent.appendChild(createGalleryComponent());

//////////////////////////////////////////////////////////////////////////////
///////////////////////////// ENDLESS SCROLL /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

  // Attach a scroll event listener to the window
  window.addEventListener("scroll", function () {
    // Check if the user has scrolled to the bottom
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Increment the page number and fetch more results
      currentPage++;
      fetchResults();
    }
  });

//////////////////////////////////////////////////////////////////////////////
////////////////////////// CREATE MAIN COMPONENT /////////////////////////////
//////////////////////////////////////////////////////////////////////////////

  function createGalleryComponent() {
    // GALLERY-CONTAINER
    const galleryComponent = document.createElement("div");
    galleryComponent.className = "gallerycomponent-container";

    // Create and append the header
    const header = createHeader();
    galleryComponent.appendChild(header);

    return galleryComponent;
  }

//////////////////////////////////////////////////////////////////////////////
////////////////////////////// CREATE HEADER /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

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

    // Attach an event listener to the search form
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Reset page number on form submission
      currentPage = 1;

      // Fetch results
      fetchResults();
    });

    return header;
  }

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////// CREATE PHOTO CONTAINER //////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  function createPhotoContainer(photo) {
    const photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");
  
    const imgElement = document.createElement("img");
    imgElement.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;
    imgElement.alt = photo.title;
    imgElement.classList.add("gallerycomponent-gallery-img");
  
    photoContainer.appendChild(imgElement);
  
    return photoContainer;
  }

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////// CREATE LOADER ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

  function createLoader() {
    const loader = document.createElement("div");
    loader.textContent = "Loading...";
    loader.className = "loader";

    galleryComponent.appendChild(loader);

    return loader;
  }
//////////////////////////////////////////////////////////////////////////////
///////////////////////// FETCH THE PHOTO FROM SERVER ////////////////////////
//////////////////////////////////////////////////////////////////////////////

// Inside your fetchResults function
function fetchResults() {
  const searchInput = document.getElementById("gallerycomponent-header-input");

  if (searchInput) {
    const searchTerm = searchInput.value.trim();
    const loader = createLoader();
    document.body.appendChild(loader);
    const photoContainer = document.createElement("div");

    fetch(`${API_URLS.SEARCH}?text=${searchTerm}&page=${currentPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        photoContainer.innerHTML = "";

        if (Array.isArray(data.photos.photo)) {
          data.photos.photo.forEach((photo) => {
            const photoContainer = createPhotoContainer(photo);
            galleryComponent.appendChild(photoContainer);
          });
        } else {
          console.error("No data error: Photos do not return as an array");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      })
      .finally(() => {
        document.body.removeChild(loader);
      });
  }
}
  }
);
