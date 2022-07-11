//we initialize the SDK
(function () {
  emailjs.init("aYbzJ6xCXNk8zC2_4");
})();

//we submit our contact form and send it through EmailJS
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_bk7184v", "template_jpy3mg4", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
