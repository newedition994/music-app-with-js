window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");

  const visual = document.querySelector(".visual");
  const colors = [
    "#B942F5",
    "#42D4F5",
    "#93F542",
    "#F5426C",
    "#EFF542",
    "#5142F5"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  // function for bubbles
  const createBubbles = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
