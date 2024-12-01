// Shared Variables
let playerName = "";

// Game 1: Function Declaration
function playGame1() {
    if (!playerName) {
        playerName = prompt("Welcome to the Arcade. What's your name?");
        alert(`Hello, ${playerName}. Let's start the game.`);
    }
    let keepPlaying = true;

    while (keepPlaying) {
        let result = Math.random() < 0.5 ? "Win" : "Lose";
        alert(`${playerName}, you ${result} this round.`);
        
        let playAgain = prompt(`${playerName}, Would you like to play again? y/n`);
        keepPlaying = playAgain.toLowerCase() === 'y';
    }

    checkPlayAnother();
}

// Game 2: Function Expression
const playGame2 = function () {
    if (!playerName) {
        playerName = prompt("Welcome to the Arcade. What's your name?");
        alert(`Hello, ${playerName}. Let's start the game.``);
    }
    let keepPlaying = true;

    while (keepPlaying) {
        let guess = prompt("Guess a number between 1 and 10:");
        let answer = Math.floor(Math.random() * 10) + 1;
        let result = guess == answer ? "Correct" : `Wrong, the number was ${answer}`;
        alert(`${playerName}, you guessed ${result}.`);

        let playAgain = prompt(`${playerName}, Would you like to keep playing this game? y/n`);
        keepPlaying = playAgain.toLowerCase() === 'y';
    }

    checkPlayAnother();
};

// Game 3: Arrow Function
const playGame3 = () => {
    if (!playerName) {
        playerName = prompt("Welcome to the Arcade. What's your name?");
        alert(`Hello, ${playerName}. Let's start the game.``);
    }
    let keepPlaying = true;

    while (keepPlaying) {
        let playerMove = prompt("Rock, Paper, or Scissors?");
        let moves = ["Rock", "Paper", "Scissors"];
        let computerMove = moves[Math.floor(Math.random() * moves.length)];
        let result = playerMove === computerMove ? "Tie" : 
                     (playerMove === "Rock" && computerMove === "Scissors") || 
                     (playerMove === "Paper" && computerMove === "Rock") || 
                     (playerMove === "Scissors" && computerMove === "Paper") ? "Win" : "Lose";
        alert(`${playerName}, Computer chose ${computerMove}. You ${result}.`);

        let playAgain = prompt(`${playerName}, Would you like to keep playing this game? y/n`);
        keepPlaying = playAgain.toLowerCase() === 'y';
    }

    checkPlayAnother();
};

// Helper Function to Check If the Player Wants to Play Another Game
function checkPlayAnother() {
    let pickAnother = prompt(`${playerName}, Would you like to play another game to play? y/n`);
    if (pickAnother.toLowerCase() !== 'y') {
        document.getElementById("farewell").innerHTML = `Goodbye, ${playerName}! Thanks for playing.`;
    }
}
