let humanScore = 0;
let computerScore = 0;
let round = 1;

const container = document.getElementsByClassName("container");
const mainTitle = document.querySelector("#main-title");
const battleground = document.querySelector("#battleground");
const getButton = document.querySelectorAll("button");
const humanOut = document.querySelector("#human");
const botOut = document.querySelector("#computer");
const humanOutScore = document.querySelector("#humanscore");
const botOutScore = document.querySelector("#botscore");
const footer = document.querySelector("#footer")

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 0 && computerChoice == 2) {
        humanScore++;
        footer.textContent = "Human Won!";
        console.log("Human Won!");
    }
    else if (humanChoice == 2 && computerChoice == 0) {
        computerScore++;
        footer.textContent = "Computer Won!";
        console.log("Computer Won!");
    }
    else if(humanChoice == computerChoice) {
        footer.textContent = "Draw!";
        console.log("Draw");
    }
    else if (humanChoice > computerChoice) {
        humanScore++;
        footer.textContent = "Human Won!";
        console.log("Human Won!");
    }
    else {
        computerScore++;
        footer.textContent = "Computer Won!";
        console.log("Computer Won!");        
    }
    humanOutScore.textContent = `${humanScore}`;
    botOutScore.textContent = `${computerScore}`;
    round++;

    if (humanScore == 5 || computerScore == 5) {
        overallWin();
    }
}

function getComputerChoice(maxInt) {
    return Math.floor(Math.random() * maxInt);
}

function displayChoice(selectChoice) {
    switch (selectChoice) {
        case 0:
            return "✊";
        case 1:
            return "✋";
        case 2:
            return "✌";
        default:
            return "💀";
    }
}

function overallWin() {
    if (humanScore > computerScore) {
        mainTitle.textContent = `WINNER: HUMAN`;
    } else {
        mainTitle.textContent = `WINNER: COMPUTER`;
    }
    round = 1;
    humanScore = 0;
    computerScore = 0;
}

function playGame(human) {
    const humanSelect = parseInt(human);
    humanOut.textContent = displayChoice(humanSelect);
    const computerSelect = getComputerChoice(3);
    console.log(computerSelect);
    botOut.textContent = displayChoice(computerSelect);
    mainTitle.textContent = `Round #${round}`;
    playRound(humanSelect, computerSelect);       
}

getButton.forEach((button) => {
button.addEventListener("click", () => {
    playGame(button.value);
    });
});