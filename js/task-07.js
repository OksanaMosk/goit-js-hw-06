const sizeContr = document.querySelector("#font-size-control");
const myText = document.querySelector("#text");
const myRange = document.querySelector("range");
const rangeMin = document.querySelector("min");
const rangeMax = document.querySelector("max");
myRange.addEventListener("mousedown", (event) => {
  if (rangeMin.getAttribute("min") + 1) {
    myText.textContent.style = "+1";
  } else {
  }
});
