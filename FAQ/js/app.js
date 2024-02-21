// const BTNS = document.querySelectorAll(".question-btn")

// BTNS.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//         const QUESTIONS = event.currentTarget.parentElement.parentElement;
//         QUESTIONS.classList.toggle("show-text");
//     })
// })

// console.log(BTNS);

const QUESTIONS = document.querySelectorAll(".question");

QUESTIONS.forEach((question) => {
    // console.log(question);
    const BTN = question.querySelector(".question-btn");
    // console.log(BTN)

    BTN.addEventListener("click", () => {

        QUESTIONS.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })

        question.classList.toggle("show-text")

    })
})