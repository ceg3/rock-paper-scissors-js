
const play = document.querySelector("#playButton");
const playerSelection = document.querySelector("#playerSelection");
const computerSelection = document.querySelector("#computerSelection");
const winner = document.querySelector("#winner");
const translationTable = {1: "Rock", 2: "Paper", 3: "Scissors"};

const playGame = function() {

    let playerResponse = prompt("Rock[1], Paper[2], Scissors[3]")
    let computerResponse = Math.floor(Math.random()*3) + 1;

    if(playerResponse < 1) {
        playerResponse = 1;
    } else if(playerResponse > 3) {
        playerResponse = 3;
    }

    playerSelection.innerText = translationTable[playerResponse];
    computerSelection.innerText = translationTable[computerResponse];
    winner.innerText = computeWinner(playerResponse,computerResponse);

}

// Use a little math to compute the winner
const computeWinner = function(plResp, cmpResp) {
    let delta = plResp - cmpResp;
    switch(delta) {
        case 0:
            return "Draw";
        case 1:
            return "Player";
        case 2:
            return "Computer";
        case -1:
            return "Computer";
        case -2:
            return "Player";
    }
}

play.addEventListener('click', playGame);

