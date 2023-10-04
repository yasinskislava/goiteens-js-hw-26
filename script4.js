const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", checkLength);

function checkLength() {
    if (textInput.value.length == textInput.dataset.length) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    }
    else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
    
}