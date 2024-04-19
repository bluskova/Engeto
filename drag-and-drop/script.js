const boxes = document.querySelectorAll(".box");
const image = document.querySelector(".box .image");

boxes.forEach((oneBox) => {
  oneBox.addEventListener("dragover", (event) => {
    // vypneme defaultni chovani:
    // neumoznuje pretahovani veci sem a tam
    event.preventDefault();
    oneBox.classList.add("hovering");
  });

  oneBox.addEventListener("dragleave", () => {
    oneBox.classList.remove("hovering");
  });

  // pusteni obrazku nad boxem
  // => div s obrazkem na pozadi se prida jako potomek daneho boxu
  oneBox.addEventListener("drop", () => {
    oneBox.append(image);
    oneBox.classList.remove("hovering");
  });
});
