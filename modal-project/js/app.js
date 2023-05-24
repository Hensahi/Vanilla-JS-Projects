// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const MODAL_BTN = document.querySelector(".modal-btn");
const CLOSE_BTN = document.querySelector(".close-btn");
const MODAL_OVERLAY = document.querySelector(".modal-overlay");

MODAL_BTN.addEventListener("click", () => {
    MODAL_OVERLAY.classList.add("open-modal");
})

CLOSE_BTN.addEventListener("click", () => {
    MODAL_OVERLAY.classList.remove("open-modal");
})