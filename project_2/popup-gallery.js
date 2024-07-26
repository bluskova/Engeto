const allImages = document.querySelectorAll(".image-container img");
const popupImage = document.querySelector(".popup-image");
const popupImageImg = document.querySelector(".popup-image img");
const popupImageClose = document.querySelector(".popup-image .close");
const popupImageLeft = document.querySelector(".popup-image .left");
const popupImageRight = document.querySelector(".popup-image .right");

// inicialization:
const numberOfAllImages = allImages.length;
let gallerySlideIndex = 0;
let touchstartX = 0;
let touchendX = 0;

// function which find the index of next or previous image
// and change source of popup image (depend on this index)
const changePopupImage = (side) => {
  if (side === "left") {
    shift = -1;
  } else if (side === "right") {
    shift = 1;
  } else {
    throw new Error("Parameter can be 'left' or 'right'.");
  }

  gallerySlideIndex =
    (gallerySlideIndex + numberOfAllImages + shift) % numberOfAllImages;

  popupImageImg.src = allImages[gallerySlideIndex].getAttribute("src");
};

// function which chceck the direction of swipe
const checkDirection = () => {
  if (touchendX > touchstartX) changePopupImage("left");
  if (touchendX < touchstartX) changePopupImage("right");
};

// popup photo -> on click any image
allImages.forEach((oneImage, index) => {
  oneImage.addEventListener("click", () => {
    popupImage.style.display = "block";
    popupImageImg.src = oneImage.getAttribute("src");
    gallerySlideIndex = index;
  });
});

// close popup image - click on photo
popupImageImg.addEventListener("click", () => {
  popupImage.style.display = "none";
});

// close popup image - click on cross
popupImageClose.addEventListener("click", () => {
  popupImage.style.display = "none";
});

// previous popup image - click on '<'
popupImageLeft.addEventListener("click", () => {
  changePopupImage("left");
});

// next popup image - click on '>'
popupImageRight.addEventListener("click", () => {
  changePopupImage("right");
});

// close or shift popup image - press the key on keyboard
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    popupImage.style.display = "none";
  } else if (event.code === "Numpad4" || event.code === "ArrowLeft") {
    changePopupImage("left");
  } else if (event.code === "Numpad6" || event.code === "ArrowRight") {
    changePopupImage("right");
  }
});

// swipe photos left and right on touchpad
document.addEventListener("touchstart", (event) => {
  touchstartX = event.changedTouches[0].screenX;
});

document.addEventListener("touchend", (event) => {
  touchendX = event.changedTouches[0].screenX;
  checkDirection();
});
