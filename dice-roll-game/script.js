const playBtn = document.querySelector(".play-btn");
const cubeImage = document.querySelector(".cube-image");
const resultSection = document.querySelector(".result");
const resetBtn = document.querySelector(".reset-btn a");

const maxClicks = 5;
const maxCounter = 20;

let counter = 0;
let clicks = 0;

const createParagraph = (section, parContent) => {
  const newPar = document.createElement("p");
  newPar.textContent = parContent;
  section.append(newPar);
};

playBtn.addEventListener("click", () => {
  // rotate image
  const degrees = clicks * 360;
  cubeImage.style.transform = `rotate(${degrees}deg)`;

  // roll of the dice
  const randomNum = Math.floor(Math.random() * 6) + 1;
  cubeImage.src = `img/${randomNum}.jpg`;
  counter = counter + randomNum;

  resultSection.textContent = "";
  createParagraph(resultSection, counter);

  // number of clicks
  clicks = clicks + 1;

  // game state - continues / win / lose
  if (clicks < maxClicks && counter < maxCounter) {
    createParagraph(resultSection, "Házej dál!");
  } else if (clicks <= maxClicks && counter >= maxCounter) {
    createParagraph(resultSection, "Vyhráli jste!");
    playBtn.style.visibility = "hidden";
    resetBtn.textContent = "Nová hra";
  } else if (clicks >= maxClicks && counter <= maxCounter) {
    createParagraph(resultSection, "Prohráli jste!");
    playBtn.style.visibility = "hidden";
    resetBtn.textContent = "Nová hra";
  }
});
