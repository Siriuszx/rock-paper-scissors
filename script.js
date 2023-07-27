/*
Understanding:
    Write a rock paper scissors game. Both computer and player choose: rock, paper or scissors.
    Depending on what they chose game determines who won based on following rules:
        1. Rock beats Scissors
        2. Paper beats Rock
        3. Scissors beat Paper
    Both players don't know which option their opponent picked. The game starts with both players
    revealing which option they chose previously.

Plan:
    UI:
        This game doesn't have UI yet. The inputs from the player will be registered through the
        console.
    Inputs:
        The player will interact with the program trough input() in the console.
        The input from the opponent will be generated randomly.
    Outputs:
        Based on set rules. The game will determine who won each round giving +1 point to the
        winner and printing the winner of the round in the console.
Pseudocode:
        STORE player score and computer score
        WHILE game is true, game continues
            GET player choice 'rock' 'paper' 'scissors' 'exit'
                CONVERT to uppercase
            GET random computer choice
            IF player choice === exit
                console.log('Thanks for playing!')
                break;
            ELSE
                GET winner by looking at player and computer choices
                    IF player chose rock and computer chose scissors
                        return player WON
                    ELIF player chose paper and computer chose rock
                        return player WON
                    ELIF player chose scissors and computer chose paper
                        return player WON
                    ELIF player choice === comp choice
                        return DRAW
                    ELSE
                        return computer WON
END

Note to Self:
    Dear future Me, 
    
    if you for some odd reason decide to revisit this code, please don't forget that this book exists.
    "Think Like a Programmer: An Introduction to Creative Problem Solving" by V. Anton Spraul
    
    Best of luck! 
    You got this.
*/

let player1Score = 0;
let player2Score = 0;

let game = false; // It's gonna be useful later, I'm certain of it ^^
let playerInput = '';

const chooseBtns = document.querySelectorAll('.rps-tool');

chooseBtns.forEach(el => {
    el.addEventListener('click', playRound);
})

while (game) {

    if (playerInput == 'exit' || playerInput == null) {
        console.log('Thanks for playing the game! See ya!');
        game = false;
        break;
    }

    updateResult(getRoundResult(playerInput, computerInput));
    console.log(getGameStatus());
}

function playRound(e){
    let computerChoice = getRandomChoice();
    let playerChoice = this.textContent.toLowerCase();

    updateResult(getRoundResult(playerChoice,computerChoice));
}

function getRandomChoice() { // Generate random option choice. Return result as a string.
    let choices = ['rock', 'paper', 'scissors']; //0 1 2
    return choices[Math.floor(Math.random() * 3)]; // Math.random() * 3 doesn't include the last number...
}

function getRoundResult(p1Choice, p2Choice) { // Game Win Condition. Compare choices. Return result as a string.
    if (p1Choice == 'rock' && p2Choice == 'scissors') {
        return 'p1Won';
    } else if (p1Choice == 'paper' && p2Choice == 'rock') {
        return 'p1Won';
    } else if (p1Choice == 'scissors' && p2Choice == 'paper') {
        return 'p1Won';
    } else if (p1Choice == p2Choice) {
        return 'draw';
    } else {
        return 'p2Won'
    }
}

function updateResult(gameResult) {
    if (gameResult == 'p1Won') {
        player1Score++;
        console.log(`Player1 won this round!`);
    } else if (gameResult == 'p2Won') {
        console.log(`Player2 won this round!`);
        player2Score++;
    } else if (gameResult == 'draw') {
        console.log(`This round ended with draw.`);
    }
}

function getGameStatus() {
    return `Current stats: 
        Player1 Score: ${player1Score} 
        Player2 Score: ${player2Score}`
}