function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomIntegerBetweenZeroAndX(2)]
}

function getRandomIntegerBetweenZeroAndX(x) {
    return Math.floor(Math.random() * (x + 1));
}

