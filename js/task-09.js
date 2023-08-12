const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
const clickHandler = (event) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const numberColor = (document.body.style.backgroundColor =
    getRandomHexColor());
  spanEl.textContent = numberColor;
  console.log(event);
};
btnEl.addEventListener("click", clickHandler);
