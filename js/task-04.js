const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;

const countDecrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};
btnDecrement.addEventListener("click", countDecrement);

const countIncrement = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
btnIncrement.addEventListener("click", countIncrement);
