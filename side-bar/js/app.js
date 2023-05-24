const SIDEBAR = document.querySelector(".sidebar");
const MENU_BTN = document.querySelector(".sidebar-toggle");
const SIDEBAR_BTN = document.querySelector(".close-btn");

MENU_BTN.addEventListener("click", () => {
    SIDEBAR.classList.toggle("show-sidebar");
})

SIDEBAR_BTN.addEventListener("click", () => {
    SIDEBAR.classList.toggle("show-sidebar");

})