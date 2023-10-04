const red = document.querySelector("#red");
const white = document.querySelector("#white");
const green = document.querySelector("#green");
const body = document.querySelector("body");

red.addEventListener("input", changeColor);
white.addEventListener("input", changeColor);
green.addEventListener("input", changeColor);

function changeColor(res) {
    body.style.backgroundColor = res.target.id;
}