//////////////////////////////////////////////////////////////////////////////
///////////////////////////// EVENT LISTENERS ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    // Connection for the component container where everything will be rendered.
    const projectHeaderComponent = document.getElementById("projectHeaderComponent");
  
    // Append the projectHeaderComponent to the main container
    projectHeaderComponent.appendChild(createProjectHeaderComponent());
  
  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////// CREATE MAIN COMPONENT /////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  
    function createProjectHeaderComponent() {
      // PROJECT-HEADER-CONTAINER
      const projectHeaderComponent = document.createElement("div");
      projectHeaderComponent.className = "projectHeaderComponent-container";
  
      // HEADER-TITLE
      const titleElement = document.createElement("h1");
      titleElement.textContent = "TITLE-COMPONENT"; // Set your desired title here
      titleElement.classList.add("projectHeaderComponent-title");
  
  
      // Append the title and input elements to the projectHeaderComponent
      projectHeaderComponent.appendChild(titleElement);
  
      return projectHeaderComponent;
    }
  });
  