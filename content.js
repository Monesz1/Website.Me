var label = {};

label.homeNavBtnLabel = document.querySelector(".home-nav-btn");
label.aboutNavBtnLabel = document.querySelector(".about-nav-btn");
label.servicesNavBtnLabel = document.querySelector(".services-nav-btn");
label.resumeNavBtnLabel = document.querySelector(".resume-nav-btn");
label.contactNavBtnLabel = document.querySelector(".contact-nav-btn");
label.darkModeLabel = document.querySelector(".dark-mode-label");
label.welcomingHomeText = document.querySelector(".welcoming-text-home");
label.professionTextHome = document.querySelector(".profession-text-home");
label.getInTouchBtn = document.querySelector(".get-in-touch-btn");
label.aboutMeBtn = document.querySelector(".about-btn");
label.tltrTitle = document.querySelector(".tltr-title");
label.tltrText = document.querySelector(".tltr-text");
label.wavingHandEmoji = '<img src="assets/emoji.svg" alt="waving hand emoji">';
label.developerName = "Attila Molnár";

label.homeNavBtnLabel.innerHTML = "Home";
label.aboutNavBtnLabel.innerHTML = "About Me";
label.servicesNavBtnLabel.innerHTML = "Services";
label.resumeNavBtnLabel.innerHTML = "Resume";
label.contactNavBtnLabel.innerHTML = "Contact";
label.welcomingHomeText.innerHTML =
  "Hi " +
  label.wavingHandEmoji +
  " my name is" +
  '<span class="fs-2"><br><strong>' +
  label.developerName +
  "</strong></span>";
label.professionTextHome.innerHTML =
  "Java + Javascript Developer <br>& Team Player";
label.getInTouchBtn.innerHTML = "Get in touch";
label.aboutMeBtn.innerHTML = "About me";
// label.darkModeLabel.innerHTML = "DARK MODE";
label.tltrTitle.innerHTML = "TL;TR";
label.tltrText.innerHTML =
  "I’m a professional software developer with front end and back end development skills based in Hungary.";
