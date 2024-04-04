// select from html
const menuIcon = document.querySelector("header .menu-icon-container i");
const navigation = document.querySelector("header nav");
const navigationLinks = document.querySelectorAll("header nav li");

// function which replace the hamburger and cross icon
function replaceClass(element, oldClass, newClass) {
  element.classList.remove(oldClass);
  element.classList.add(newClass);
}

// open and close navigation
let hiddenNav = true;
menuIcon.addEventListener("click", () => {
  if (hiddenNav) {
    navigation.style.display = "block";
    replaceClass(menuIcon, "fa-bars", "fa-xmark");
    hiddenNav = false;
  } else {
    navigation.style.display = "none";
    replaceClass(menuIcon, "fa-xmark", "fa-bars");
    hiddenNav = true;
  }
});

// close the navigation after click any link
navigationLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    navigation.style.display = "none";
    replaceClass(menuIcon, "fa-xmark", "fa-bars");
    hiddenNav = true;
  })
);

// change hero image every 3 sec
const imageSources = [
  "img/hero-img/chaos-soccer-gear-Cjfl8r_eYxY-unsplash.jpg",
  "img/hero-img/omar-ram-kHhLJMRpRDI-unsplash.jpg",
  "img/hero-img/vikram-tkv-JO19K0HDDXI-unsplash.jpg",
  "img/hero-img/peter-glaser-UVWULib2OHM-unsplash.jpg",
];

const heroSection = document.querySelector(".hero-section");
let index = 0;
setInterval(function () {
  index = index % imageSources.length;
  heroSection.style.backgroundImage = `url(${imageSources[index]})`;
  index++;
}, 3000);
