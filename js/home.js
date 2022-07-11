//Startup

document.addEventListener("DOMContentLoaded", (event) => {
  //this will restore the saved state of the page
  let activePage = sessionStorage.getItem("page");

  switch (activePage) {
    case "about":
      loadAboutMePage();
      break;
    case "services":
      loadServicesPage();
      break;
    case "resume":
      loadResumePage();
      break;
    case "contact":
      loadContactMePage();
      break;
    default:
      navigation.homeNavBtn.classList.add("active");
      home.homeContainer.classList.remove("remove");
      loadHome();
  }
});

// Adding content to elements
let darkModeNavBtn = document.querySelector(".darkModeNavBtn");
