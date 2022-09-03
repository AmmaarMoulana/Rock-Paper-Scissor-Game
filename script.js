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

//global variables
let computerScore = 0
let playerScore = 0
let round = 0;  

///game over function
function gameOver() {
    computerScore = 0
    playerScore = 0
    round = 0
    return textResult.textContent="Game Restarted";
}


//Play a round, Function takes in player choice and random computer choice.

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (computerScore == 5 || playerScore == 5  ) {
        if (computerScore > playerScore) {
           alert("GAME OVER! COMPUTER WINS!")
        } else if (playerScore > computerScore) {
            alert ("GAME OVER! YOU WIN!")
        } return gameOver(); 
    } 
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return textResult.textContent="You lose! Paper beats Rock";  
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerScore++;
        return textResult.textContent="You Win! Scissor beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return textResult.textContent="You Win! Paper beats Rock"; 
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        computerScore++
        return textResult.textContent="You Lose! Rock beats Scissor";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        playerScore++
        return textResult.textContent="You Win! Rock beats Scissor";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        computerScore++
        return textResult.textContent="You Lose! Scissor beats Paper";
    } else (playerSelection = computerSelection)
        return textResult.textContent="Draw!";

}
    
    //Listens for clicks on rock paper scissor images.

    rock.addEventListener('click', () => {
        playRound('rock', getComputerChoice())
        round++
        results.textContent= "Your score is " + playerScore + " | Computer score is " + computerScore
    })

    paper.addEventListener('click', () => {
        playRound('paper', getComputerChoice())
        round++
        results.textContent= "Your score is " + playerScore + " | Computer score is " + computerScore
    })

    scissor.addEventListener('click', () => {
        playRound('scissor', getComputerChoice())
        round++
        results.textContent= "Your score is " + playerScore + " | Computer score is " + computerScore
    })