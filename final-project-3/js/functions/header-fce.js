import commonFce from "./common-fce.js";

const openNav = (navigation, menuIcon) => {
  commonFce.replaceClass(navigation, "display-none", "display-block");
  commonFce.replaceClass(menuIcon, "fa-bars", "fa-xmark");
  const hiddenNav = false;

  return hiddenNav;
};

const closeNav = (navigation, menuIcon) => {
  commonFce.replaceClass(navigation, "display-block", "display-none");
  commonFce.replaceClass(menuIcon, "fa-xmark", "fa-bars");
  const hiddenNav = true;

  return hiddenNav;
};

const checkColorTheme = (switcher) => {
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

export default {
  openNav,
  closeNav,
  checkColorTheme,
  switchTheme,
};
