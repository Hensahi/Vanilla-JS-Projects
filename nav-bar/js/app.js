const BUTTON = document.querySelector(".nav-toggle");
const LINKS = document.querySelector(".links");

BUTTON.addEventListener("click", () => {
    LINKS.classList.toggle("show-links");
})