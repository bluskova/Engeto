import commonFce from "./functions/common-fce.js";
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
      commonFce.replaceClass(pswText, "red-color", "black-color");
    } else {
      formFce.insertContent(pswText, "Hesla nejsou shodná");
      commonFce.replaceClass(pswText, "black-color", "red-color");
    }

    formFce.htmlTagCleaner(psw1Value, psw2Value, pswText);
  });
});
