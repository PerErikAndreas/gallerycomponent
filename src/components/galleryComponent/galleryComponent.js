//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// IMPORTS ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

import { API_URLS } from './urls.js';

//////////////////////////////////////////////////////////////////////////////
///////////////////////////// EVENT LISTENERS ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  // The connection to the main container where everything will be rendered.
  const galleryComponent = document.getElementById("galleryComponent");
  const photoContainer = createPhotoContainer();

  let isFetching = false; // Initial fetch status
  let currentPage = 1; // Initial pagenumber
  let currentScrollPosition = 0; // Initial scroll position

  // Append the header created by createHeader to the galleryComponent
  galleryComponent.appendChild(createHeader());
  
  // Fetch initial data
  fetchResults();

//////////////////////////////////////////////////////////////////////////////
////////////////////// PHOTOCONTAINER ENDLESS SCROLL /////////////////////////
//////////////////////////////////////////////////////////////////////////////

// Trying to implement conditionals to check if the the user is at the bottom of the window
// or the bottom om the photocontainer. 

photoContainer.addEventListener("scroll", function () {
  // Check if the user has scrolled to the bottom of the galleryComponent
  if (photoContainer.scrollTop + photoContainer.clientHeight >= photoContainer.scrollHeight - 300) {
    if (!isFetching) {
      currentScrollPosition = photoContainer.scrollTop;
      isFetching = true;
      currentPage++;
      fetchResults();
    }
  }
});

//////////////////////////////////////////////////////////////////////////////
/////////////////////////// WINDOW ENDLESS SCROLL ////////////////////////////
//////////////////////////////////////////////////////////////////////////////

window.addEventListener("scroll", function () {
  // Check if the user has scrolled to the bottom of the browser window
  if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 300) {
    if (!isFetching) {
      currentScrollPosition = photoContainer.scrollTop;
      isFetching = true;
      currentPage++;
      fetchResults();
    }
  }
});

//////////////////////////////////////////////////////////////////////////////
////////////////////////////// CREATE HEADER /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

  function createHeader() {
    // HEADER-DIV
    const header = document.createElement("div");
    header.className = "galleryComponent-header-container";

    // HEADER-INPUT
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "galleryComponent-header-input";
    searchInput.name = "search-term";
    searchInput.placeholder = "Enter search words";
    searchInput.classList.add("galleryComponent-header-input");

    // HEADER-BUTTON
    const searchButton = document.createElement("button");
    searchButton.type = "submit";
    searchButton.textContent = "Search";
    searchButton.id = "galleryComponent-header-button";
    searchButton.classList.add("galleryComponent-header-button");

    // Append the input and button elements to a form element
    const searchForm = document.createElement("form");
    searchForm.id = "galleryComponent-header-form";
    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);

    // Append the form to the header
    header.appendChild(searchForm);

    // Attach an event listener to the search form
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the page from reloading
      photoContainer.innerHTML = "";

      // Fetch results
      fetchResults();
    });

    return header;
  }

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////// CREATE PHOTO CONTAINER //////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  function createPhotoContainer() {
    const container = document.createElement("div");
    container.classList.add("galleryComponent-photoContainer");
    return container;
  }

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////// CREATE PHOTO ////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  function createImgElement(photo) {
    const imgElement = document.createElement("img");
    imgElement.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;
    imgElement.classList.add("galleryComponent-photoContainer-img");
    return imgElement;
  }

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////// CREATE LOADER ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

  function createLoader() {
    const loader = document.createElement("div");
    loader.textContent = "Loading...";
    loader.className = "galleryComponent-loader";

    photoContainer.appendChild(loader);

    return loader;
  }
//////////////////////////////////////////////////////////////////////////////
//////////////////////// FETCH PHOTOS FROM SERVER ////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function fetchResults() {
  const searchInput = document.getElementById("galleryComponent-header-input");

  if (searchInput) {
    const searchTerm = searchInput.value.trim(); // Removes whitespace before and after the words.
    const loader = createLoader(photoContainer);

    fetch(`${API_URLS.SEARCH}?text=${searchTerm}&page=${currentPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data.photos.photo)) { // motivera detta
          data.photos.photo.forEach((photo) => {
            const imgElement = createImgElement(photo);
            photoContainer.appendChild(imgElement);
          });
          galleryComponent.appendChild(photoContainer);
          photoContainer.scrollTop = currentScrollPosition;
        } else {
          console.error("No data error: Photos do not return as an array");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      })
      .finally(() => {
        photoContainer.removeChild(loader);
        isFetching = false;
      });
  }
}});


