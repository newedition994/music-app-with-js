window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");

  const visual = document.querySelector(".visual");
  const colors = [
    rgb(185, 66, 245),
    rgb(66, 212, 245),
    rgb(96, 139, 61),
    rgb(245, 66, 108),
    rgb(239, 245, 66),
    rgb(81, 66, 245)
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });
});
