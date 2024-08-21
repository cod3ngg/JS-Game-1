let humanScore = 0;
let computerScore = 0;
let round = 1;
let repeat;

function playRound(humanChoice, computerChoice) {
    if (humanChoice > computerChoice) {
        humanScore++;
        alert(`HUMAN WINS!\n${humanScore} - ${computerScore}`);
    }
    else if(humanChoice == computerChoice) {
        alert(`DRAW!\n${humanScore} - ${computerScore}`);

    }
    else {
        computerScore++;
        alert(`COMPUTER WINS!\n${humanScore} - ${computerScore}`);
    }
}


function getHumanChoice() {
    let humanAns = window.prompt(`Round ${round} - 5\nChoose your weapon:\n1 - ROCK\n2 - PAPER\n3 - SCISSOR`);
    return humanAns;
}

function getComputerChoice(maxInt) {
    return Math.floor(Math.random() * maxInt);
}

function overallWin() {
    if (humanScore > computerScore) {
        alert(`HUMAN IS DA WINNER`);
    } else if (humanScore == computerScore) {
        alert(`NO-ONE IS DA WINNER`);
    } else {
        alert(`COMPUTER IS DA WINNER`);
    }
}

function playGame() {
    for (let i = 1; i < 6; i++) {
        const humanSelect = getHumanChoice();
        const computerSelect = getComputerChoice(3);
        playRound(humanSelect, computerSelect);
        round++;
    }
    overallWin();
    round = 1;
    humanScore = 0;
    computerScore = 0;
}

do {
    playGame();
    repeat = confirm(`Wanna play another game?`);
} while (repeat);
