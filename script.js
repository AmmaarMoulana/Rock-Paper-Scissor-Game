// Computer randomly chooses rock, paper or scissor

function getComputerChoice() {
    let computerSelection = Math.random();
    if (computerSelection < 0.333) {
    return "rock";
}   else if (computerSelection < 0.666) {
    return "paper";
}   else  {
    return "scissor";
}

}

//Play a round, Function takes in player choice and random computer choice.

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";  
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerScore++;
        return "You Win! Scissor beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You Win! Paper beats Rock"; 
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        computerScore++
        return "You Lose! Rock beats Scissor";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        playerScore++
        return "You Win! Rock beats Scissor";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        computerScore++
        return "You Lose! Scissor beats Paper";
    } else (playerSelection = computerSelection)
        return "Draw!";
   
}

//global variables
let playerSelection = "Choose Rock, Paper, or Scissor";
let computerScore = 0
let playerScore = 0
 
// repeat until 5 games are played.

function game() {
        for (let i = 0; i < 5; i++) {
       console.log(playRound(prompt(playerSelection),getComputerChoice())); 
       console.log(playerScore,computerScore)
    }  if (computerScore>playerScore) {
        return console.log("computer wins")
    } else 
                console.log("player wins")
}

game();