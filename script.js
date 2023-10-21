
// Returns a random choice for the computer
function getComputerChoice() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[getRandomIntegerBetweenZeroAndX(2)]
}


// Picks a random number between 0 and x
function getRandomIntegerBetweenZeroAndX(x) {
    return Math.floor(Math.random() * (x + 1));
}

// Play one round and return picked choices and who won
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    switch (playerSelection) {
        case "ROCK":
            if (computerSelection === "SCISSORS") {
                return "Player: " + playerSelection + " - Computer: " + computerSelection + " - Congratulations, Player won!";
            } else if (playerSelection === computerSelection) {
                return "Computer and Player both chose: " + playerSelection + " - Noone wins!";
            } else {
                return "Player: " + playerSelection + " - Computer: " + computerSelection + " - Oh no :( Player lost";
            }
            break;

        case "PAPER":
            if (computerSelection === "ROCK") {
                return "Player: " + playerSelection + " - Computer: " + computerSelection + " - Congratulations, Player won!";
            } else if (playerSelection === computerSelection) {
                return "Computer and Player both chose: " + playerSelection + " - Noone wins!";
            } else {
                return "Player: " + playerSelection + " - Computer: " + computerSelection + " - Oh no :( Player lost";
            }
            break;

        case "SCISSORS":
            if (computerSelection === "PAPER") {
                return "Player: " + playerSelection + " - Computer: " + computerSelection + " - Congratulations, Player won!";
            } else if (playerSelection === computerSelection) {
                return "Computer and Player both chose: " + playerSelection + " - Noone wins!";
            } else {
                return "Player: " + playerSelection + " - Computer: " + computerSelection + " - Oh no :( Player lost";
            }
            break;
    }
}
