import formFce from "./functions/form-login-fce.js";

const name = document.getElementById("username");
const pswInputs = document.querySelectorAll(".psw-input");
const pswText = document.getElementById("psw-text");

pswInputs.forEach((oneInput) => {
  oneInput.addEventListener("input", () => {
    const psw1Value = formFce.getInputValue(pswInputs[0]);
    const psw2Value = formFce.getInputValue(pswInputs[1]);

    console.log(psw1Value, psw2Value);

    if (psw1Value === psw2Value) {
      formFce.insertContent(pswText, "Hesla jsou shodná");

      formFce.removeClass(pswText, "red-color");
      formFce.addClass(pswText, "black-color");
    } else {
      formFce.insertContent(pswText, "Hesla nejsou shodná");

      formFce.removeClass(pswText, "black-color");
      formFce.addClass(pswText, "red-color");
    }

    formFce.htmlTagCleaner(psw1Value, psw2Value, pswText);
  });
});
