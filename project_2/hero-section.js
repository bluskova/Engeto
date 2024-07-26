const heroSection = document.querySelector(".hero-section");
const dots = document.querySelectorAll(".dot");

const heroImageSources = [
  "./img/hero-img/peter-glaser-UVWULib2OHM-unsplash.jpg",
  "./img/hero-img/chaos-soccer-gear-Cjfl8r_eYxY-unsplash.jpg",
  "./img/hero-img/vikram-tkv-JO19K0HDDXI-unsplash.jpg",
];

let heroImageIndex = 0;

// function which change hero image
const changePhotos = () => {
  dots[heroImageIndex].classList.remove("active");
  heroImageIndex = (heroImageIndex + 1) % heroImageSources.length;
  dots[heroImageIndex].classList.add("active");
  heroSection.style.backgroundImage = `url(${heroImageSources[heroImageIndex]})`;
};

// call function 'changePhotos' at specified intervals - 5 sec
const timerID = setInterval(changePhotos, 5000);
