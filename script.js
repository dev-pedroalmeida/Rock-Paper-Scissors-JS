
function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random()*3)+1;

    switch(choiceNumber){
        case 1:
            return "Rock";
        
        case 2:
            return "Paper";

        case 3:
            return "Scissors";
        
        default:
            return "Rock";
    }
}