const questionTitle = document.querySelectorAll(".questionTitle");
const answers = document.querySelectorAll(".answer");

// console.log(questionTitle);

questionTitle.forEach((question) => {
  question.addEventListener("click", (e) => {
    // e.target.classList.toggle("hide");
    e.target.parentNode.children[1].classList.toggle("hide");
  });
});

// Se inicia funcionalidad de la aplicacion agregando los event listeners para las diferentes preguntas

//todo: La funcionalidad actual agrega la clase hide al boton de ocultar cuando se da click en el boton mostrar; lo que debe hacer es agregar dicha clase al parrafo de respuesta.

//todo: la funcionalidad actual no intercambia entre el icono de mostrar y ocultar segun sea cliqueado el titulo y/o uno de los botones
//todo: la funcionalidad actual no oculta automaticamente la respuesta abierta al momento al mostrar otra respuesta.
