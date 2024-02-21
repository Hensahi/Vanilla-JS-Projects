const main = document.getElementById("main");
const body = document.querySelector("body");
const modalBTN = document.getElementById("modalBTN");
const ventanaModal = document.getElementById("ventanaModal");
const cerrarBTN = document.getElementById("cerrarBTN");
console.log(body);

modalBTN.addEventListener("click", () => {
    body.style.backgroundColor = "#111010";
    ventanaModal.classList.toggle("hide");
    modalBTN.classList.add("hide");
});

cerrarBTN.addEventListener("click", () => {
    body.style.backgroundColor = "#fff";

    ventanaModal.classList.toggle("hide");
    modalBTN.classList.remove("hide");


});


