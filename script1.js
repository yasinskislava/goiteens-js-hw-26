const openBtn = document.querySelector('[data-action="open-modal"]');
const closeBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.js-backdrop');

function openModal() {
    backdrop.style.opacity = 1;
    backdrop.style.visibility = "visible";
    backdrop.style.pointerEvents = "initial";
}
function closeModal() {
    backdrop.style.opacity = 0;
    backdrop.style.visibility = "hidden";
    backdrop.style.pointerEvents = "none";
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);