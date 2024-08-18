import headerFce from "./functions/header-fce.js";

const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector("header nav");
const switcher = document.querySelector(".switch input");

let hiddenNav = true;

menuIcon.addEventListener("click", () => {
  if (hiddenNav) {
    hiddenNav = headerFce.openNav(navigation, menuIcon);
  } else {
    hiddenNav = headerFce.closeNav(navigation, menuIcon);
  }
});

document.body.addEventListener("click", (event) => {
  if (!hiddenNav && event.target.id !== "menu-icon") {
    headerFce.closeNav(navigation, menuIcon);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && !hiddenNav) {
    headerFce.closeNav(navigation, menuIcon);
  }
});

headerFce.checkColorTheme(switcher);

switcher.addEventListener("change", headerFce.switchTheme);
