const questionTitle = document.querySelectorAll(".questionTitle");
const answers = document.querySelectorAll(".answer");
const addIcon = document.querySelectorAll(".addIcon");
const removeIcon = document.querySelectorAll(".removeIcon");

// console.log(questionTitle);

function closeOpenAnswer(event) {
    for (let i = 0; i < questionTitle.length; i++) {
        if (questionTitle[i] == event.target || event.target.classList.contains("addIcon") || event.target.classList.contains("removeIcon")) {
            continue;
        } else {

            answers.forEach(answer => answer.classList.add("hide"));
            removeIcon.forEach(icon => icon.classList.add("hide"));
            addIcon.forEach(icon => icon.classList.remove("hide"));

            // console.log(i);
            // console.log(event.target.classList)

        }
    }
}

function resetIcon(event, index) {
    event.target.classList.add("hide");
    event.target.parentNode.children[index].classList.toggle("hide");
    event.target.parentNode.parentNode.nextElementSibling.classList.toggle(
        "hide"
    );
    console.log(event.target.parentNode.parentNode.nextElementSibling);
    console.log(event.target.parentNode.children[index]);

}

questionTitle.forEach((question) => {
    question.addEventListener("click", (e) => {
        closeOpenAnswer(e);
        if (e.target.classList.contains("questionTitle")) {
            // e.target.nextSibling.classList.toggle("hide");

            e.target.nextElementSibling.classList.toggle("hide");
            e.target.firstElementChild.firstElementChild.classList.toggle("hide");
            e.target.firstElementChild.lastElementChild.classList.toggle("hide");
        }
    });
});

addIcon.forEach((icon) => {
    icon.addEventListener("click", (e) => {
        closeOpenAnswer(e);
        resetIcon(e, 1);
        // console.log(e.target.parentNode.parentNode.nextElementSibling);
    });
});

removeIcon.forEach((icon) => {
    icon.addEventListener("click", (e) => {
        closeOpenAnswer(e);
        resetIcon(e, 0);
    });
});

// Se continua funcionalidad de la aplicacion mejorando los event listeners para las diferentes preguntas e iconos

//todo: La funcionalidad debe mostrar el icono correcto segun corresponda al igual que debe ocultar o mostrar la respuesta segun corresponda al dar clic tanto al titulo como al icono que esta mostrando. e.i. Si se da clic al titulo, se debe mostrar la respuesta y cambiar el icono de mostrar al de ocultar, si mientras que se esta mostrando la respuesta y el icono de ocultar/minimizar, le damos clic al icono de ocultar/minimizar, se debe ocultar la respuesta y cambiar el icono de ocultar/minimizar al de mostrar.

//todo: la funcionalidad actual no oculta automaticamente la respuesta abierta al momento al mostrar otra respuesta.
