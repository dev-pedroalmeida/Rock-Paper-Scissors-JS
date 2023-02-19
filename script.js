
function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1;

    switch (choiceNumber) {
        case 1:
            return "rock";

        case 2:
            return "paper";

        case 3:
            return "scissors";

        default:
            return "rock";
    }
}



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors")
            || (playerSelection === "scissors" && computerSelection === "paper")
            || (playerSelection === "paper" && computerSelection === "rock")) {

        return `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if ((playerSelection === "rock" && computerSelection === "paper")
            || (playerSelection === "scissors" && computerSelection === "rock")
            || (playerSelection === "paper" && computerSelection === "scissors")) {

        return `You Lose! ${playerSelection} loses to ${computerSelection}`;
    } else {
        return "Oops! Something went wrong!"
    }
}
