"use strict";

//////////////////////////////////////////////////////////////////////////////
///////////////////////////// EVENT LISTENERS ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  // Connection for the component container where everything will be rendered.
  const testHeaderComponent = document.getElementById("testHeaderComponent");

  // Append the testHeaderComponent to the main container
  testHeaderComponent.appendChild(createTestHeaderComponent());

  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////// CREATE MAIN COMPONENT /////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  function createTestHeaderComponent() {
    // test-HEADER-CONTAINER
    const testHeaderComponent = document.createElement("div");
    testHeaderComponent.className = "testHeaderComponent-container";

    // HEADER-TITLE
    const titleElement = document.createElement("h1");
    titleElement.textContent = "TESTHEADERCOMPONENT"; // Set your desired title here
    titleElement.classList.add("testHeaderComponent-title");

    // Append the title and input elements to the testHeaderComponent
    testHeaderComponent.appendChild(titleElement);
    return testHeaderComponent;
  }
});