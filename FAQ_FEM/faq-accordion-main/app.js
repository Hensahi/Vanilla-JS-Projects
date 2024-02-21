const questionTitle = document.querySelectorAll(".questionTitle");
const answers = document.querySelectorAll(".answer");
const addIcon = document.querySelectorAll(".addIcon");
const removeIcon = document.querySelectorAll(".removeIcon");


// console.log(questionTitle);

questionTitle.forEach((question) => {
    question.addEventListener("click", (e) => {
        if (e.target.classList.contains("questionTitle")) {

            e.target.classList.toggle("hide");
        }

    });
});

addIcon.forEach(icon => {
    icon.addEventListener("click", (e) => {
        e.target.classList.add("hide");
        e.target.parentNode.children[1].classList.remove("hide");

        console.log(e.target);

    });
});

removeIcon.forEach(icon => {
    icon.addEventListener("click", (e) => {
        e.target.classList.add("hide");
        e.target.parentNode.children[0].classList.remove("hide");

    });
});


// Se inicia funcionalidad de la aplicacion agregando los event listeners para las diferentes preguntas

//todo: La funcionalidad actual agrega la clase hide al boton de ocultar cuando se da click en el boton mostrar; lo que debe hacer es agregar dicha clase al parrafo de respuesta.

//todo: la funcionalidad actual no intercambia entre el icono de mostrar y ocultar segun sea cliqueado el titulo y/o uno de los botones

//todo: la funcionalidad actual no oculta automaticamente la respuesta abierta al momento al mostrar otra respuesta.

