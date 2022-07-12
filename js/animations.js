//TODO

function loadHome() {
  var tl = gsap.timeline();
  tl.from(
    home.profileCharacter,
    {
      delay: 0.5,
      duration: 2,
      x: -200,
      scale: 0.9,
      opacity: 0,
    },
    1
  )
    .from(
      home.leftContent,
      {
        delay: 0.5,
        duration: 1,
        x: -500,
        opacity: 0,
      },
      2
    )
    .from(
      home.rightContent,
      {
        delay: 0.5,
        duration: 1,
        x: 500,
        opacity: 0,
      },
      3
    );
}

function buttonBounce() {
  var tl = gsap.timeline();
  gsap.to(home.githubBtn, { scale: 1.2, duration: 1 });
  gsap.to(home.linkedInBtn, { scale: 1.2, duration: 1 });
  gsap.to(home.twitterBtn, { scale: 1.2, duration: 1 });
  gsap.to(home.emailBtn, { scale: 1.2, duration: 1 });
}

// .to(home.linkedInBtn, { duration: 0.1, y: -10, yoyo: true }, 3)
// .to(home.twitterBtn, { duration: 0.1, y: -10, yoyo: true }, 4)
// .to(home.emailBtn, { duration: 0.1, y: -10, yoyo: true }, 5);
