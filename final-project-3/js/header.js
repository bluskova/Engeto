const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector("header nav");
const switcher = document.querySelector(".switch input");

// inicialization
let hiddenNav = true;

// function which replace the hamburger and cross icon
const replaceClass = (element, oldClass, newClass) => {
  element.classList.remove(oldClass);
  element.classList.add(newClass);
};

// function which open navigation
const openNav = () => {
  replaceClass(navigation, "display-none", "display-block");
  replaceClass(menuIcon, "fa-bars", "fa-xmark");
  hiddenNav = false;
};

// function which close navigation
const closeNav = () => {
  replaceClass(navigation, "display-block", "display-none");
  replaceClass(menuIcon, "fa-xmark", "fa-bars");
  hiddenNav = true;
};

const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "blue-mode");
  } else {
    document.documentElement.setAttribute("data-theme", "yellow-mode");
  }
};

// open and close navigation
menuIcon.addEventListener("click", () => {
  if (hiddenNav) {
    openNav();
  } else {
    closeNav();
  }
});

// close the navigation after click anywhere (include 'navLinks', exclude 'menuIcon')
document.body.addEventListener("click", (event) => {
  if (!hiddenNav && event.target.id !== "menu-icon") {
    closeNav();
  }
});

// close the navigation after click 'Escape'
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && !hiddenNav) {
    closeNav();
  }
});

// switch yellow / blue mode
switcher.addEventListener("change", switchTheme);
