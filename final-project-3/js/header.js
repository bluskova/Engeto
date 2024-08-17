const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector("header nav");
const switcher = document.querySelector(".switch input");

let hiddenNav = true;

const replaceClass = (element, oldClass, newClass) => {
  element.classList.remove(oldClass);
  element.classList.add(newClass);
};

const openNav = () => {
  replaceClass(navigation, "display-none", "display-block");
  replaceClass(menuIcon, "fa-bars", "fa-xmark");
  hiddenNav = false;
};

const closeNav = () => {
  replaceClass(navigation, "display-block", "display-none");
  replaceClass(menuIcon, "fa-xmark", "fa-bars");
  hiddenNav = true;
};

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

const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("color-theme", "blue-mode");
    localStorage.setItem("colorThemeLS", "blue-mode");
  } else {
    document.documentElement.setAttribute("color-theme", "yellow-mode");
    localStorage.setItem("colorThemeLS", "yellow-mode");
  }
};

menuIcon.addEventListener("click", () => {
  if (hiddenNav) {
    openNav();
  } else {
    closeNav();
  }
});

document.body.addEventListener("click", (event) => {
  if (!hiddenNav && event.target.id !== "menu-icon") {
    closeNav();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && !hiddenNav) {
    closeNav();
  }
});

checkColorTheme();

switcher.addEventListener("change", switchTheme);
