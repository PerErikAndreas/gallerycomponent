"use strict";

require("../components/testFooterComponent/testFooterComponent.js");
require("../components/testHeaderComponent/testHeaderComponent.js");
require("../components/galleryComponent/galleryComponent.js");
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// IMPORTS ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
///////////////////////// CREATE CONTAINER ELEMENTS //////////////////////////
//////////////////////////////////////////////////////////////////////////////

const testHeaderComponent = document.createElement('div');
testHeaderComponent.id = 'testHeaderComponent';
const galleryComponent = document.createElement('div');
galleryComponent.id = 'galleryComponent';
const testFooterComponent = document.createElement('div');
testFooterComponent.id = 'testFooterComponent';

//////////////////////////////////////////////////////////////////////////////
///////////////////////// APPEND COMPONENTS TO BODY //////////////////////////
//////////////////////////////////////////////////////////////////////////////

document.body.appendChild(testHeaderComponent);
document.body.appendChild(galleryComponent);
document.body.appendChild(testFooterComponent);