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

// function which check color-theme from local storage
const checkColorTheme = () => {
  const colorTheme = localStorage.getItem("colorThemeLS");

  if (colorTheme === "yellow-mode") {
    switcher.checked = false;
    document.documentElement.setAttribute("color-theme", "yellow-mode");
  }

  if (colorTheme === "blue-mode") {
    switcher.checked = true;
    document.documentElement.setAttribute("color-theme", "blue-mode");
  }
};

// function which change color-theme
const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("color-theme", "blue-mode");
    localStorage.setItem("colorThemeLS", "blue-mode");
  } else {
    document.documentElement.setAttribute("color-theme", "yellow-mode");
    localStorage.setItem("colorThemeLS", "yellow-mode");
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

// check color theme from local storage
checkColorTheme();

// switch yellow / blue mode
switcher.addEventListener("change", switchTheme);
