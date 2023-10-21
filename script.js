let playerScore = 0;
let computerScore = 0;

// Starts a 5 round game, displaying winners and loosers at the end
// and keeping score
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Choose between Rock, Paper and Scissors: "), getComputerChoice()));
    }

    console.log("Player: " + playerScore + " - Computer: " + computerScore);
    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (playerScore === computerScore) {
        console.log("It's a tie!");
    } else {
        console.log("Computer wins!")
    }
}

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
                playerScore++;
                return "Player: " + playerSelection + " - Computer: " + computerSelection + " - Congratulations, Player won!";
            } else if (playerSelection === computerSelection) {
                return "Computer and Player both chose: " + playerSelection + " - Noone wins!";
            } else {
                computerScore++;
                return "Player: " + playerSelection + " - Computer: " + computerSelection + " - Oh no :( Player lost";
            }
            break;

        case "PAPER":
            if (computerSelection === "ROCK") {
                playerScore++;
                return "Player: " + playerSelection + " - Computer: " + computerSelection + " - Congratulations, Player won!";
            } else if (playerSelection === computerSelection) {
                return "Computer and Player both chose: " + playerSelection + " - Noone wins!";
            } else {
                computerScore++;
                return "Player: " + playerSelection + " - Computer: " + computerSelection + " - Oh no :( Player lost";
            }
            break;

        case "SCISSORS":
            if (computerSelection === "PAPER") {
                playerScore++;
                return "Player: " + playerSelection + " - Computer: " + computerSelection + " - Congratulations, Player won!";
            } else if (playerSelection === computerSelection) {
                return "Computer and Player both chose: " + playerSelection + " - Noone wins!";
            } else {
                computerScore++;
                return "Player: " + playerSelection + " - Computer: " + computerSelection + " - Oh no :( Player lost";
            }
            break;
    }
}

// Runs the game
game();