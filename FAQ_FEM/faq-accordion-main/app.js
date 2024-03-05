const questionTitle = document.querySelectorAll(".questionTitle");
const answers = document.querySelectorAll(".answer");
const addIcon = document.querySelectorAll(".addIcon");
const removeIcon = document.querySelectorAll(".removeIcon");

console.log(questionTitle);

function closeOpenAnswer(event) {
<<<<<<< HEAD
  for (let i = 0; i < questionTitle.length; i++) {
    if (
      questionTitle[i] == event.target ||
      event.target.classList.contains("addIcon")
    ) {
      continue;
    } else if (!answers[i].classList.contains("hide")) {
      answers[i].classList.add("hide");

      for (let i = 0; i < questionTitle.length; i++) {
        if (addIcon[i].classList.contains("hide")) {
          addIcon[i].classList.remove("hide");
          removeIcon[i].classList.add("hide");
        }
      }
=======
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
>>>>>>> 97cc1f59e41d229efe9393b33326c067bcb80b73
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
<<<<<<< HEAD
  question.addEventListener("click", (e) => {
    closeOpenAnswer(e);
    if (e.target.classList.contains("questionTitle")) {
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
    for (let i = 0; i < addIcon.length; i++) {
      if (addIcon[i] == e.target || e.target.classList.contains("removeIcon")) {
        continue;
      } else if (addIcon[i].classList.contains("hide")) {
        addIcon[i].classList.remove("hide");
        removeIcon[i].classList.add("hide");
        answers[i].classList.add("hide");
      }
      console.log(i);
    }
    // console.log(e.target.parentNode.parentNode.nextElementSibling);
  });
});

removeIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    closeOpenAnswer(e);

    resetIcon(e, 0);
  });
=======
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
>>>>>>> 97cc1f59e41d229efe9393b33326c067bcb80b73
});
