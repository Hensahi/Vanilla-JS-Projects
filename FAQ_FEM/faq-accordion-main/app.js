const questionTitle = document.querySelectorAll(".questionTitle");
const answers = document.querySelectorAll(".answer");
const addIcon = document.querySelectorAll(".addIcon");
const removeIcon = document.querySelectorAll(".removeIcon");


// console.log(questionTitle);

questionTitle.forEach((question) => {
    question.addEventListener("click", (e) => {
        if (e.target.classList.contains("questionTitle")) {

            // e.target.nextSibling.classList.toggle("hide");
            e.target.nextElementSibling.classList.toggle("hide");
            // console.log(e);

        }

    });
});

addIcon.forEach(icon => {
    icon.addEventListener("click", (e) => {
        e.target.classList.add("hide");
        e.target.parentNode.children[1].classList.remove("hide");
        e.target.parentNode.parentNode.nextElementSibling.classList.toggle("hide");

        console.log(e.target.parentNode.parentNode.nextElementSibling);

    });
});

removeIcon.forEach(icon => {
    icon.addEventListener("click", (e) => {
        e.target.classList.add("hide");
        e.target.parentNode.children[0].classList.remove("hide");
        e.target.parentNode.parentNode.nextElementSibling.classList.toggle("hide");


    });
});


// Se continua funcionalidad de la aplicacion mejorando los event listeners para las diferentes preguntas e iconos

//todo: La funcionalidad debe mostrar el icono correcto segun corresponda al igual que debe ocultar o mostrar la respuesta segun corresponda al dar clic tanto al titulo como al icono que esta mostrando. e.i. Si se da clic al titulo, se debe mostrar la respuesta y cambiar el icono de mostrar al de ocultar, si mientras que se esta mostrando la respuesta y el icono de ocultar/minimizar, le damos clic al icono de ocultar/minimizar, se debe ocultar la respuesta y cambiar el icono de ocultar/minimizar al de mostrar.

//todo: la funcionalidad actual no oculta automaticamente la respuesta abierta al momento al mostrar otra respuesta.

