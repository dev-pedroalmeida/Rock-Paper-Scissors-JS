const choicesBtn = document.querySelectorAll(".choice-btn");

const pPlayerPoints = document.querySelector("#player-points");
const pComputerPoints = document.querySelector("#computer-points");

const pRoundResult = document.querySelector("#round-result");

let playerWins = 0;
let computerWins = 0;

choicesBtn.forEach(btn => btn.addEventListener("click", () => {
    playGame(btn.id);
}));




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



function getRoundResult(playerSelection, computerSelection) {
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
        //ERROR
        return 3;
    }
}



function playGame(playerChoice) {

    let computerChoice = getComputerChoice();

    let roundResult = getRoundResult(playerChoice, computerChoice);

    switch (roundResult) {
        case 0:
            console.log("Tie!");
            pRoundResult.textContent = "Tie!";
            break;

        case 1:
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
            pRoundResult.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
            
            playerWins++;
            pPlayerPoints.textContent = playerWins;

            break;

        case 2:
            console.log(`You lose! ${playerChoice} loses to ${computerChoice}`);
            pRoundResult.textContent = `You lose! ${playerChoice} loses to ${computerChoice}`;
            
            computerWins++;
            pComputerPoints.textContent = computerWins;

            break;

        case 3:
            console.log(`Oops, something went wrong!\nMaybe ${playerChoice} isn't a option.`);
            i--;

            break;

    }

    endGame(playerWins, computerWins);
}



const divGame = document.querySelector(".game");

const pGameResult = document.createElement("p");
pGameResult.classList = "game-result";

const btnResetGame = document.createElement("button");
btnResetGame.classList = "reset-btn";
btnResetGame.textContent = "Play again?";
btnResetGame.addEventListener("click", resetGame());

function endGame(playerWins, computerWins) {
    if(playerWins == 5 || computerWins == 5) {
        if(playerWins > computerWins) {
            pGameResult.textContent = "Congratulations! You won against the machine!";
            divGame.appendChild(pGameResult);
            divGame.appendChild(btnResetGame);
        } else {
            pGameResult.textContent = "OH NOOOOO! You died!";
            divGame.appendChild(pGameResult);
            divGame.appendChild(btnResetGame);
        }
        choicesBtn.forEach(btn => {
            btn.disabled = true;
        })
    }
}


function resetGame() {

}

