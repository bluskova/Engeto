function replaceClass(element, oldClass, newClass) {
  element.classList.remove(oldClass);
  element.classList.add(newClass);
}

const menuIcon = document.querySelector("header .menu-icon-container i");
const navigation = document.querySelector("header nav");

let hiddenMenu = true;

menuIcon.addEventListener("click", () => {
  if (hiddenMenu) {
    navigation.style.display = "block";
    replaceClass(menuIcon, "fa-bars", "fa-xmark");
    hiddenMenu = false;
  } else {
    navigation.style.display = "none";
    replaceClass(menuIcon, "fa-xmark", "fa-bars");
    hiddenMenu = true;
  }
});
