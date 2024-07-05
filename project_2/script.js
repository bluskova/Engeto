// select from html
const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector("header nav");
const heroSection = document.querySelector(".hero-section");
const dots = document.querySelectorAll(".dot");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav li a");

// function which replace the hamburger and cross icon
const replaceClass = (element, oldClass, newClass) => {
  element.classList.remove(oldClass);
  element.classList.add(newClass);
};

// function which open navigation
const openNav = () => {
  navigation.style.display = "block";
  replaceClass(menuIcon, "fa-bars", "fa-xmark");
  hiddenNav = false;
};

// function which close navigation
const closeNav = () => {
  navigation.style.display = "none";
  replaceClass(menuIcon, "fa-xmark", "fa-bars");
  hiddenNav = true;
};

// open and close navigation
let hiddenNav = true;
menuIcon.addEventListener("click", () => {
  if (hiddenNav) {
    openNav();
  } else {
    closeNav();
  }
});

// // close the navigation after click any link
// navLinks.forEach((navLink) =>
//   navLink.addEventListener("click", () => {
//     closeNav();
//   })
// );

// close the navigation after click anywhere (include 'navLinks', exclude 'menuIcon')
document.body.addEventListener("click", (event) => {
  if (!hiddenNav && event.target.id !== "menu-icon") {
    closeNav();
  }
});

// change hero image every 3 sec
const imageSources = [
  "./img/hero-img/peter-glaser-UVWULib2OHM-unsplash.jpg",
  "./img/hero-img/chaos-soccer-gear-Cjfl8r_eYxY-unsplash.jpg",
  // "./img/hero-img/omar-ram-kHhLJMRpRDI-unsplash.jpg",
  "./img/hero-img/vikram-tkv-JO19K0HDDXI-unsplash.jpg",
];

let imageIndex = 0;
const changePhotos = () => {
  dots[imageIndex].classList.remove("active");
  imageIndex = (imageIndex + 1) % imageSources.length;
  dots[imageIndex].classList.add("active");
  heroSection.style.backgroundImage = `url(${imageSources[imageIndex]})`;
};

const timerID = setInterval(changePhotos, 5000);
// clearInterval(timerID);

// active navbar links on scroll
// window.onscroll = () => {
//   sections.forEach((oneSection) => {
//     const top = window.scrollY;
//     const offset = oneSection.offsetTop - 150;
//     const height = oneSection.offsetHeight;
//     const id = oneSection.getAttribute("id");
//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((oneLink) => {
//         oneLink.classList.remove("active");
//       });
//       document
//         .querySelector("header nav li a[href*=" + id + "]")
//         .classList.add("active");
//     }
//   });
// };

// active navbar links on scroll
addEventListener("scroll", () => {
  sections.forEach((oneSection, index) => {
    const top = window.scrollY;
    const offset = oneSection.offsetTop - 150;
    const height = oneSection.offsetHeight;
    // const id = oneSection.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((oneLink) => {
        oneLink.classList.remove("active");
      });
      navLinks[index].classList.add("active");
    }
  });
});
