const name = document.getElementById("username");
const pswInputs = document.querySelectorAll(".psw-input");
const pswText = document.getElementById("psw-text");

const getInputValue = (input) => {
  return input.value;
};

const insertContent = (htmlTag, content) => {
  htmlTag.textContent = content;
};

const addClass = (htmltag, className) => {
  htmltag.classList.add(className);
};

const removeClass = (htmltag, className) => {
  htmltag.classList.remove(className);
};

const htmlTagCleaner = (input1value, input2value, htmlTag) => {
  if (input1value === "" && input2value === "") {
    insertContent(htmlTag, "");
  }
};

pswInputs.forEach((oneInput) => {
  oneInput.addEventListener("input", () => {
    const psw1Value = getInputValue(pswInputs[0]);
    const psw2Value = getInputValue(pswInputs[1]);

    console.log(psw1Value, psw2Value);

    if (psw1Value === psw2Value) {
      insertContent(pswText, "Hesla jsou shodná");

      removeClass(pswText, "red-color");
      addClass(pswText, "black-color");
    } else {
      insertContent(pswText, "Hesla nejsou shodná");

      removeClass(pswText, "black-color");
      addClass(pswText, "red-color");
    }

    htmlTagCleaner(psw1Value, psw2Value, pswText);
  });
});
