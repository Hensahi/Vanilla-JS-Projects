const BUTTON = document.querySelector(".nav-toogle");
const LINKS = document.querySelector(".links");

BUTTON.addEventListener("click", () => {
    LINKS.classList.toggle("show-links");
})