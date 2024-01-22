//////////////////////////////////////////////////////////////////////////////
///////////////////////////// EVENT LISTENERS ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    // Connection for the component container where everything will be rendered.
    const testFooterComponent = document.getElementById("testFooterComponent");
  
    // Append the testHeaderComponent to the main container
    testFooterComponent.appendChild(createTestFooterComponent());
  
  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////// CREATE MAIN COMPONENT /////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  
    function createTestFooterComponent() {
      // TEST-HEADER-CONTAINER
      const testFooterComponent = document.createElement("div");
      testFooterComponent.className = "testFooterComponent-container";
  
      // HEADER-TITLE
      const titleElement = document.createElement("h1");
      titleElement.textContent = "TESTFOOTERCOMPONENT"; // Set your desired title here
      titleElement.classList.add("testFooterComponent-title");
  
  
      // Append the title and input elements to the testHeaderComponent
      testFooterComponent.appendChild(titleElement);
  
      return testFooterComponent;
    }
  });
  