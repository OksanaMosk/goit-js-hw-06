const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const phrasesEl = document.querySelector("h1");
const evn = (event) => {
  outputEl.textContent =
    inputEl.value !== "" ? event.currentTarget.value : `Anonymous`;
};
inputEl.addEventListener("input", evn);
