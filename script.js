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

const choiceBtns = document.querySelectorAll('.rps-tool');
const p1Score = document.querySelector('.p1score');
const p2Score = document.querySelector('.p2score');
const roundState = document.querySelector('.round-state');

choiceBtns.forEach(el => {
    el.addEventListener('click', playRound);
})

function playRound(e) {
    let computerChoice = getRandomChoice();
    let playerChoice = this.textContent.toLowerCase();

    updateStatus(getRoundWinner(playerChoice, computerChoice));
}

function getRandomChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getRoundWinner(p1Choice, p2Choice) {
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

function updateStatus(gameResult) {
    if (gameResult == 'p1Won') {
        player1Score++;
        roundState.textContent = `Player1 won this round!`;
    } else if (gameResult == 'p2Won') {
        roundState.textContent = `Player2 won this round!`;
        player2Score++;
    } else if (gameResult == 'draw') {
        roundState.textContent = `This round ended in a draw`;
    }
    p1Score.textContent = player1Score;
    p2Score.textContent = player2Score;
}