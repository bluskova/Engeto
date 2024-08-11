const switcher = document.querySelector(".switch input");
const themeText = document.querySelector(".switcher-description p");
const themeIcon = document.querySelector(".switcher-description i");

const darkMode = () => {
  themeText.textContent = "Dark Mode";
  themeIcon.classList.replace("fa-sun", "fa-moon");
};

const lightMode = () => {
  themeText.textContent = "Light Mode";
  themeIcon.classList.replace("fa-moon", "fa-sun");
};

const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
};

switcher.addEventListener("change", switchTheme);
