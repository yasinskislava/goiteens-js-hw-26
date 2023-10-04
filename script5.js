const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeInput.addEventListener("input", changeSize);

function changeSize() {
    text.style.fontSize = `${rangeInput.value}px`;
}

