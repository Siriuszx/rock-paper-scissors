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
             

*/