// import commonFce from "./functions/common-fce.js";

mybutton = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("display-none");
    mybutton.classList.add("display-block");
    // commonFce.replaceClass(mybutton, "display-none", "display-block");
  } else {
    mybutton.classList.remove("display-block");
    mybutton.classList.add("display-none");
    // commonFce.replaceClass(mybutton, "display-block", "display-none");
  }
});

mybutton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
