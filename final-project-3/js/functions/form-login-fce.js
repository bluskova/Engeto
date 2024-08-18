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

export default {
  getInputValue,
  insertContent,
  addClass,
  removeClass,
  htmlTagCleaner,
};
