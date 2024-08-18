import insertHtmlFce from "./functions/insert-html-fce.js";

document.addEventListener("DOMContentLoaded", () => {
  insertHtmlFce.loadHtmlFragment("header.html", "header", "header.js");
  insertHtmlFce.loadHtmlFragment("footer.html", "footer", "footer.js");

  if (document.getElementById("introduction-text")) {
    insertHtmlFce.loadHtmlFragment(
      "introduction-text.html",
      "introduction-text"
    );
  }

  if (document.getElementById("harmonogram-table-2024")) {
    insertHtmlFce.loadHtmlFragment(
      "harmonogram-2024.html",
      "harmonogram-table-2024"
    );
  }
});
