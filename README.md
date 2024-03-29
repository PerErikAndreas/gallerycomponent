# galleryComponent

galleryComponent is a straightforward component enabling users to search for images through the Flickr API. The application uses a server and features a client-side search bar and a gallery for displaying the search results.

## Features

- **Search Function:** Users can enter search words, and the gallery will display images related to the entered words.
- **Dynamic Loading:** The gallery supports dynamic loading, allowing users to load more images as they scroll to the bottom.

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/) installed on your machine (I used Node.js v18.14.2).

### Dependencies

- [@babel/cli](https://www.npmjs.com/package/@babel/cli): ^7.23.4
- [@babel/core](https://www.npmjs.com/package/@babel/core): ^7.23.7
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env): ^7.23.8
- [cors](https://www.npmjs.com/package/cors): ^2.8.5
- [dotenv](https://www.npmjs.com/package/dotenv): ^16.3.1
- [express](https://www.npmjs.com/package/express): ^4.18.2
- [node-fetch](https://www.npmjs.com/package/node-fetch): ^3.3.2

## Configuration

- **Flickr Key:**

The Flicker API key has ben removed from the .env file. Before you start using the galleryComponent, make sure you have your own Flickr API key. Follow these steps to set one up:

1. Visit the Flickr App Garden to request an API Key (https://www.flickr.com/services/apps/create/).

2. Inside the `.env` file, placed in this projects root, replace the placeholder for the FLICKR_API_KEY with your own key.

- **Components Proportions:**

The component is default set to a 100% width to fill its own container and the height can be adjusted accordingly:

1. Inside src/components/galleryComponent/galleryComponent.css - Adjust class .galleryComponent-photoContainer - height.

### Technology Stack

- **Frontend:**
  - Vanilla JavaScript
  - HTML
  - CSS

- **Backend:**
  - Express
  - JavaScript

### Project Structure

PROJECT-WITH-GALLERYCOMPONENT/
│
├── node_modules/
│
├── public/
│   ├── index.html
│   ├── index.css
│   └── reset.css
│   
├── src/
│   ├── components/
│   │   ├── testFooterComponent/
│   │   │   ├── testFooterComponent.js
│   │   │   └── testFooterComponent.css
│   │   │
│   │   ├── testHeaderComponent/
│   │   │   ├── testHeaderComponent.js
│   │   │   └── testHeaderComponent.css
│   │   │
│   │   └── galleryComponent/
│   │       ├── galleryComponent.css
│   │       ├── galleryComponent.js
│   │       ├── galleryComponentServer.js
│   │       └── urls.js
│   │
├── .babelrc
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

### Testing

- **Unit Testing:**
The galleryComponent was testet together with some made-up testcomponents (testFooterComponent and testHeaderComponent). This was to check its independence and if it affected the these components.

- **Browser Testing:**
The user interface and functionality of the component were tested on different web browsers, including the latest versions of Edge, Chrome, and Firefox. The testing was done using [BrowserStack](https://www.browserstack.com/) to check cross-browser compatibility.

- **Responsiveness Testing:**
The responsiveness of the component was tested on a range of devices and screen sizes using the chrome extension [ResponsiveViever](https://responsiveviewer.org/).

## Installation

1. Replace the FLICKR_API_KEY inside the `.env`.
See configuration part above.

2. Install dependencies:
npm install

3. Build the project:
npm run build

4. Start the server:
npm start

5. Open the index.html:
Open the public/index.html file in your web browser.