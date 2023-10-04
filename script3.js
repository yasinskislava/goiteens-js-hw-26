const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", changeOutput);

function changeOutput() {
  if (nameInput.value !== "") {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = "незнайомець";
  }
}
