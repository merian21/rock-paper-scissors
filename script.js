let playerScore = 0;
let computerScore = 0;

const playerScoreLabel = document.querySelector("#playerScore");
const computerScoreLabel = document.querySelector("#computerScore");

const winnerLabel = document.querySelector("#winnerText");

const rockBtn = document.querySelector('#rockButton');
const paperBtn = document.querySelector('#paperButton');
const scissorsBtn = document.querySelector('#scissorsButton');

rockBtn.addEventListener("click", () => clickButton("rock"));
paperBtn.addEventListener("click", () => clickButton("paper"));
scissorsBtn.addEventListener("click", () => clickButton("scissors"));


function clickButton(buttonChoice) {
    playRound(buttonChoice, getComputerChoice());
    playerScoreLabel.textContent = "Player: " + playerScore;
    computerScoreLabel.textContent = "Computer: " + computerScore;
    if (playerScore === 5 || computerScore === 5) {
        endRound();
    }
}

function endRound() {
    console.log("xxx Wins!");
    playerScore = 0;
    computerScore = 0;
    playerScoreLabel.textContent = "Player: " + playerScore;
    computerScoreLabel.textContent = "Computer: " + computerScore;
    if (playerScore > computerScore) {
        winnerLabel.textContent = "Congratulations, Player wins!";
    } else {
        winnerLabel.textContent = "Oh no! Player loses!";
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
                winnerLabel.textContent = "Player: " + playerSelection + " - Computer: " + computerSelection + " - Congratulations, Player won!";
            } else if (playerSelection === computerSelection) {
                winnerLabel.textContent = "Computer and Player both chose: " + playerSelection + " - Noone wins!";
            } else {
                computerScore++;
                winnerLabel.textContent = "Player: " + playerSelection + " - Computer: " + computerSelection + " - Oh no :( Player lost";
            }
            break;

        case "PAPER":
            if (computerSelection === "ROCK") {
                playerScore++;
                winnerLabel.textContent = "Player: " + playerSelection + " - Computer: " + computerSelection + " - Congratulations, Player won!";
            } else if (playerSelection === computerSelection) {
                winnerLabel.textContent = "Computer and Player both chose: " + playerSelection + " - Noone wins!";
            } else {
                computerScore++;
                winnerLabel.textContent = "Player: " + playerSelection + " - Computer: " + computerSelection + " - Oh no :( Player lost";
            }
            break;

        case "SCISSORS":
            if (computerSelection === "PAPER") {
                playerScore++;
                winnerLabel.textContent = "Player: " + playerSelection + " - Computer: " + computerSelection + " - Congratulations, Player won!";
            } else if (playerSelection === computerSelection) {
                winnerLabel.textContent = "Computer and Player both chose: " + playerSelection + " - Noone wins!";
            } else {
                computerScore++;
                winnerLabel.textContent = "Player: " + playerSelection + " - Computer: " + computerSelection + " - Oh no :( Player lost";
            }
            break;
    }
}

// Runs the game
