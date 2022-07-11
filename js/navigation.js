navigation.logoBtn.addEventListener("click", function () {
  sessionStorage.clear();
  loadHomePage();
});

navigation.homeNavBtn.addEventListener("click", function () {
  sessionStorage.clear();
  loadHomePage();
});

navigation.aboutNavBtn.addEventListener("click", function () {
  sessionStorage.setItem("page", "about");
  loadAboutMePage();
});

navigation.servicesNavBtn.addEventListener("click", function () {
  sessionStorage.setItem("page", "services");
  loadServicesPage();
});

navigation.resumeNavBtn.addEventListener("click", function () {
  sessionStorage.setItem("page", "resume");
  loadResumePage();
});

navigation.contactNavBtn.addEventListener("click", function () {
  sessionStorage.setItem("page", "contact");
  loadContactMePage();
});

navigation.aboutBtn.addEventListener("click", function () {
  sessionStorage.setItem("page", "about");
  loadAboutMePage();
});

navigation.getInTouchBtn.addEventListener("click", function () {
  window.scrollTo(0, document.body.scrollHeight);
  buttonBounce();
});

function loadHomePage() {
  navigation.homeNavBtn.classList.add("active");
  navigation.aboutNavBtn.classList.remove("active");
  navigation.servicesNavBtn.classList.remove("active");
  navigation.resumeNavBtn.classList.remove("active");
  navigation.contactNavBtn.classList.remove("active");
  home.homeContainer.classList.remove("remove");
  home.aboutContainer.classList.add("remove");
  home.servicesContainer.classList.add("remove");
  home.pdfViewer.classList.add("remove");
  home.resumeContainer.classList.add("remove");
  home.contactContainer.classList.add("remove");
}

function loadAboutMePage() {
  navigation.aboutNavBtn.classList.add("active");
  navigation.homeNavBtn.classList.remove("active");
  navigation.servicesNavBtn.classList.remove("active");
  navigation.resumeNavBtn.classList.remove("active");
  navigation.contactNavBtn.classList.remove("active");
  home.aboutContainer.classList.remove("remove");
  home.homeContainer.classList.add("remove");
  home.servicesContainer.classList.add("remove");
  home.pdfViewer.classList.add("remove");
  home.resumeContainer.classList.add("remove");
  home.contactContainer.classList.add("remove");
}

function loadServicesPage() {
  navigation.servicesNavBtn.classList.add("active");
  navigation.homeNavBtn.classList.remove("active");
  navigation.aboutNavBtn.classList.remove("active");
  navigation.resumeNavBtn.classList.remove("active");
  navigation.contactNavBtn.classList.remove("active");
  home.servicesContainer.classList.remove("remove");
  home.homeContainer.classList.add("remove");
  home.aboutContainer.classList.add("remove");
  home.pdfViewer.classList.add("remove");
  home.resumeContainer.classList.add("remove");
  home.contactContainer.classList.add("remove");
}

function loadResumePage() {
  navigation.resumeNavBtn.classList.add("active");
  navigation.homeNavBtn.classList.remove("active");
  navigation.aboutNavBtn.classList.remove("active");
  navigation.servicesNavBtn.classList.remove("active");
  navigation.contactNavBtn.classList.remove("active");
  home.resumeContainer.classList.remove("remove");
  home.pdfViewer.classList.remove("remove");
  home.homeContainer.classList.add("remove");
  home.aboutContainer.classList.add("remove");
  home.servicesContainer.classList.add("remove");
  home.contactContainer.classList.add("remove");
}

function loadContactMePage() {
  navigation.contactNavBtn.classList.add("active");
  navigation.aboutNavBtn.classList.remove("active");
  navigation.homeNavBtn.classList.remove("active");
  navigation.servicesNavBtn.classList.remove("active");
  navigation.resumeNavBtn.classList.remove("active");
  home.aboutContainer.classList.add("remove");
  home.homeContainer.classList.add("remove");
  home.servicesContainer.classList.add("remove");
  home.pdfViewer.classList.add("remove");
  home.resumeContainer.classList.add("remove");
  home.contactContainer.classList.remove("remove");
}
