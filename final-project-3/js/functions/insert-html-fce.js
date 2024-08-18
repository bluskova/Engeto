const loadHtmlFragment = (htmlFile, whereToInsert, jsFile = null) => {
  const targetElement = document.getElementById(whereToInsert);

  if (!targetElement) {
    console.error(`Element with ID ${whereToInsert} not found.`);
    return;
  }

  fetch(`./html-fragment/${htmlFile}`)
    .then((response) => response.text())
    .then((data) => {
      targetElement.innerHTML = data;

      if (jsFile) {
        const script = document.createElement("script");
        script.src = `./js/${jsFile}`;
        script.async = true;
        script.type = "module";
        document.body.appendChild(script);
      }
    })
    .catch((error) => console.error(`Error loading ${htmlFile}:`, error));
};

export default { loadHtmlFragment };
