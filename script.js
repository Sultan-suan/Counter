

let count = 0;
let countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment-button");
const resetButton = document.getElementById("reset-button");

function increment() {
    count++;
    countElement.innerText = count;
    checkCount();
}

function reset() {
    count = 0;
    countElement.innerText = count;
    checkCount();
}

function checkCount() {
    if (count === 0) {
        resetButton.disabled = true;
    } else {
        resetButton.disabled = false;
    }

    if (count === 10) {
        incrementButton.disabled = true;
        countElement.classList.add("count-max");
    } else {
        incrementButton.disabled = false;
        countElement.classList.remove("count-max");
    }
}

incrementButton.addEventListener("click", increment);
resetButton.addEventListener("click", reset);
