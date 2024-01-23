# galleryComponent

galleryComponent is a straightforward component enabling users to search for images through the Flickr API. The application uses a server and features a client-side search bar and a gallery for displaying the search results.

## Features

- **Search Function:** Users can enter search words, and the gallery will display images related to the entered word.
- **Dynamic Loading:** The gallery supports dynamic loading, allowing users to load more images as they scroll to the bottom.
- **Responsive Design:** The component is designed to be responsive, providing a seamless experience across various devices and browsers.

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

Before you start using the galleryComponent, make sure you have your own Flickr API key. Follow these steps to set it up:

1. Visit the Flickr App Garden to request an API Key (https://www.flickr.com/services/apps/create/).

2. Inside the `.env` file, placed in this projects root, replace the FLICKR_API_KEY with your own key

### Technology Stack

- **Frontend:**
  - Vanilla JavaScript
  - HTML
  - CSS

- **Backend:**
  - Express
  - JavaScript

### Project Structure

ANDREAS-CYGNI-TEST/
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

### Installation

1. Clone the repository: git clone https://github.com/PerErikAndreas/gallerycomponent.git OR download the folder ANDREAS-CYGNI-TEST.

2. Navigate to the project directory:
cd ANDREAS-CYGNI-TEST.

3. Install dependencies:
npm install

4. Build the project:
npm run build

5. Start the server:
npm start

6. Open the gallery.html file in a web browser:
open public/index.html