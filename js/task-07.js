const sizeContr = document.querySelector("#font-size-control");
const myText = document.querySelector("#text");
sizeContr.addEventListener("input", handler);
function handler(event) {
    myText.style.fontSize = event.currentTarget.value + 'px'
};
