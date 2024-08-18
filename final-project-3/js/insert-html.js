import mainFce from "./functions/insert-html-fce.js";

document.addEventListener("DOMContentLoaded", () => {
  mainFce.loadHtmlFragment("header.html", "header", "header.js");
  mainFce.loadHtmlFragment("footer.html", "footer", "footer.js");

  if (document.getElementById("introduction-text")) {
    mainFce.loadHtmlFragment("introduction-text.html", "introduction-text");
  }

  if (document.getElementById("harmonogram-table-2024")) {
    mainFce.loadHtmlFragment("harmonogram-2024.html", "harmonogram-table-2024");
  }
});
