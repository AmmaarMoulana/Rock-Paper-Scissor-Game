// Computer chooses Rock, Paper or Scisscors

let computerSelection = Math.random();

function getComputerChoice() {
    if (computerSelection < 0.333) {
    return "rock";
}   else if (computerSelection < 0.666) {
    return "paper";
}   else  {
    return "scisscor";
}

}

alert(getComputerChoice())
//
// Choose the winner and output result
// repeat until 5 games are played
