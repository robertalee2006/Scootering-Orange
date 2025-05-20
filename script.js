`use strict`;

const frames = [
  `Frame 0.png`,
  `Frame 1.png`,
  `Frame 2.png`,
  `Frame 3.png`,
  `Frame 4.png`,
  `Frame 5.png`,
  `Frame 6.png`,
  `Frame 7.png`,
];

const backgroundMusic = document.querySelector("#background-music");

const closeButton = document.querySelector("#close-button");

const muteButton = document.querySelector("#mute-button");

const mainButton = document.querySelector("#main-button");

const display = document.querySelector("#frame-display");

const finalMessage = document.querySelector(`.final-message`);

let currentIndex = 0;

let currentIndexLeft;

closeButton.classList.add(`hidden`);

const musicAndUpdate = function () {
  if (backgroundMusic.paused) backgroundMusic.play();
  currentIndex++;

  if (currentIndex < frames.length) {
    updateFrame();
  } else if ((currentIndex = frames.length)) {
    currentIndex = 0;
    updateFrame();
  }
};

const musicAndUpdateLeft = function () {
  if (backgroundMusic.paused) backgroundMusic.play();

  currentIndex--;

  if (currentIndex >= 0) {
    updateFrame();
  } else if (currentIndex < 0) {
    currentIndex = 7;
    updateFrame();
  }
};

finalMessage.classList.add(`hidden`);

const updateFrame = function () {
  display.style.opacity = 1;

  const img = new Image();
  img.src = frames[currentIndex];

  img.onload = () => {
    display.style.backgroundImage = `url("${frames[currentIndex]}")`;

    display.style.opacity = 1;
  };
};

updateFrame();

muteButton.addEventListener("click", () => {
  backgroundMusic.muted = !backgroundMusic.muted;
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") musicAndUpdate();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") musicAndUpdateLeft();
});

mainButton.addEventListener("click", musicAndUpdate);
