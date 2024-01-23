// Create container elements
const testHeaderComponent = document.createElement('div');
testHeaderComponent.id = 'testHeaderComponent';

const galleryComponent = document.createElement('div');
galleryComponent.id = 'galleryComponent';

const testFooterComponent = document.createElement('div');
testFooterComponent.id = 'testFooterComponent';

// Append the containers to the body or another element in the DOM
document.body.appendChild(testHeaderComponent);
document.body.appendChild(galleryComponent);
document.body.appendChild(testFooterComponent);

// Import your components
import '../components/testFooterComponent/testFooterComponent.js';
import '../components/testHeaderComponent/testHeaderComponent.js';
import '../components/galleryComponent/galleryComponent.js';