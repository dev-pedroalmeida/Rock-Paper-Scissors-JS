
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
        // Tie!
        return 0;
    } else if ((playerSelection === "rock" && computerSelection === "scissors")
            || (playerSelection === "scissors" && computerSelection === "paper")
            || (playerSelection === "paper" && computerSelection === "rock")) {

        // Player wins!
        return 1;

    } else if ((playerSelection === "rock" && computerSelection === "paper")
            || (playerSelection === "scissors" && computerSelection === "rock")
            || (playerSelection === "paper" && computerSelection === "scissors")) {

        // Computer wins!
        return 2;
    } else {
        return 3;
    }
}



function game() {
    let playerChoice = "";
    let computerChoice = "";

    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Choose your weapon!\nRock, paper or scissors");
        computerChoice = getComputerChoice();

        let roundResult = playRound(playerChoice, computerChoice);

        switch (roundResult) {
            case 0:
                console.log("Tie!");
                break;
            
            case 1:
                console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                playerWins++;
                break;
                
            case 2:
                console.log(`You lose! ${playerChoice} loses to ${computerChoice}`);
                computerWins++;
                break;
            
            case 3:
                console.log(`Oops, something went wrong!\nMaybe ${playerChoice} isn't a option.`);
                i--;
                break;
        }
    }


}