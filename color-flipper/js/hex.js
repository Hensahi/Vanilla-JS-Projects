const BUTTON = document.getElementById("button");
const PRINTED_COLOR = document.getElementById("printedColor");

const COLORS = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
let RANDOM_NUMBER = 0;


BUTTON.addEventListener("click", (event) => {
    let randomColor = "#"
    for (i = 0; i < 6; i++) {
        RANDOM_NUMBER = Math.floor(Math.random() * COLORS.length);
        randomColor += COLORS[RANDOM_NUMBER];
    }
    document.body.style.backgroundColor = randomColor;

    PRINTED_COLOR.textContent = randomColor;
});