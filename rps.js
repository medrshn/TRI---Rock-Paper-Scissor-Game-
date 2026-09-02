document.addEventListener("DOMContentLoaded", function () {

    const playerName = localStorage.getItem("playerName");

    const playerWelcome = document.getElementById("player-welcome");
    const playerNameDisplay = document.getElementById("player-name-display");

    const playerChoice = document.getElementById("player-choice");
    const computerChoice = document.getElementById("computer-choice");

    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");

    const gameResult = document.getElementById("game-result");
    const resultMessage = document.getElementById("result-message");

    const choiceButtons = document.querySelectorAll(".choice-button");
    const resetButton = document.getElementById("reset-button");

    let userScore = 0;
    let cpuScore = 0;
    const choices = ["rock", "paper", "scissors"];

    const choiceIcons = {
        rock: "✊",
        paper: "✋",
        scissors: "✌️"
    };

    // Display username
    if (playerName) {
        playerWelcome.textContent = `WELCOME, ${playerName.toUpperCase()} 👺`;
        playerNameDisplay.textContent = playerName.toUpperCase();
    } else {
        playerWelcome.textContent = "WELCOME, PLAYER 👺";
        playerNameDisplay.textContent = "PLAYER";
    }


    // Computer random choice
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }


    // Decide winner
    function getWinner(user, computer) {

        if (user === computer) {
            return "draw";
        }

        if (
            (user === "rock" && computer === "scissors") ||
            (user === "paper" && computer === "rock") ||
            (user === "scissors" && computer === "paper")
        ) {
            return "user";
        }
        return "computer";
    }


    // Play game
    function playGame(userChoice) {

        const computer = getComputerChoice();

        // Display choices
        playerChoice.textContent = choiceIcons[userChoice];
        computerChoice.textContent = choiceIcons[computer];
        const winner = getWinner(userChoice, computer);

        // Player wins
        if (winner === "user") {
            userScore++;
            playerScore.textContent = userScore;
            gameResult.textContent = "YOU WIN! ⚡";
            resultMessage.textContent =
                `${userChoice.toUpperCase()} BEATS ${computer.toUpperCase()}`;

        }

        // Computer wins
        else if (winner === "computer") {
            cpuScore++;
            computerScore.textContent = cpuScore;
            gameResult.textContent = "DRSHN WINS 😈";
            resultMessage.textContent =
                `${computer.toUpperCase()} BEATS ${userChoice.toUpperCase()}`;

        }

        // Draw
        else {
            gameResult.textContent = "IT'S A DRAW";
            resultMessage.textContent =
                `BOTH CHOSE ${userChoice.toUpperCase()}`;
        }
    }


    // Choice buttons
    choiceButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const userChoice = button.dataset.choice;
            playGame(userChoice);
        });
    });


    // Reset game
    resetButton.addEventListener("click", function () {

        userScore = 0;
        cpuScore = 0;

        playerScore.textContent = "0";
        computerScore.textContent = "0";
        playerChoice.textContent = "👺";
        computerChoice.textContent = "👻";
        gameResult.textContent = "MAKE YOUR MOVE";
        resultMessage.textContent =
            "Outplay the machine. Own the arena.";

    });
});