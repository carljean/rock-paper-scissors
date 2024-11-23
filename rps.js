// =============== GLOBAL VARIABLES =====================
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
let humanChoice = '';
let computerChoice = '';
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const gameContainer = document.querySelector('.game-container');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
// =====================================================
function getComputerChoice() {
    const choices = document.querySelectorAll('.computer-choice-container img');

    return choices[Math.floor(Math.random() * 3)].getAttribute('id');
}

function getHumanChoice() {
    // return prompt("Type in your choice between (rock, paper, scissors): ");
    return event.target.getAttribute('id');
}

function playRound(humanChoice, computerChoice) {
    let human_choice = humanChoice.toLowerCase().trim();


    roundCounter++;
    const roundDisplay = document.querySelector('#round-counter-screen');
    roundDisplay.innerHTML = `<p><strong>ROUND ${roundCounter}</strong></p>`;

    if(human_choice === computerChoice) {
        result.innerHTML = `<p> It is a tie!<br /> ${humanScore}:${computerScore}</p>`;
    }

    else if(human_choice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        result.innerHTML = `<p>You win!<br /> ${humanScore}:${computerScore}</p>`;
    }

    else if(human_choice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        result.innerHTML = `<p>You win!<br /> ${humanScore}:${computerScore}</p>`;
    }

    else if(human_choice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        result.innerHTML = `<p>You win!<br /> ${humanScore}:${computerScore}</p>`;
    }

    else if(human_choice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        result.innerHTML = `<p>You lose!<br /> ${humanScore}:${computerScore}</p>`;
    } else {
        computerScore++;
        result.innerHTML = `<p>You lose!<br /> ${humanScore}:${computerScore}</p>`;
    }

    gameWinner(humanScore, computerScore);
}

function gameWinner(human_score, computer_score) {
    if(human_score === 5) {
        gameContainer.innerHTML = `<p style="font-size: 24px;">You Win!<br />${human_score}:${computer_score}</p>`;
        reset();
    }
    else if(computer_score === 5) {
        gameContainer.innerHTML = `<p sytle="font-size: 24px;>You Lose!<br />${human_score}:${computer_score}</p>`;
        reset();
    }
}

function reset() {
    humanScore = 0;
    computerScore = 0;
    roundCounter = 0;
    const playBtn = document.createElement('button');
    gameContainer.appendChild(playBtn);
    playBtn.textContent = `Play Again`;

    playBtn.addEventListener('click', function () { window.location.reload() });
}

function playGame() {

    rock.addEventListener("click", function () {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        box2.style["display"] = "none";
        box3.style["display"] = "none";
        showComputerChoice(computerChoice);
        playRound(humanChoice, computerChoice);
        window.setTimeout(showButtons, 2000);
        }
    );

    paper.addEventListener("click", function () {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        box1.style["display"] = "none";
        box3.style["display"] = "none";
        showComputerChoice(computerChoice);
        playRound(humanChoice, computerChoice);
        window.setTimeout(showButtons, 2000);
        }
    );

    scissors.addEventListener("click", function () {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        box2.style["display"] = "none";
        box1.style["display"] = "none";
        showComputerChoice(computerChoice);
        playRound(humanChoice, computerChoice);
        window.setTimeout(showButtons, 2000);
        }
    );
}

function showButtons() {
    box1.style["display"] = "block";
    box2.style["display"] = "block";
    box3.style["display"] = "block";
    document.querySelector('.computer-choice-container > .box2').style["display"] = "block";
    document.querySelector('.computer-choice-container > .box3').style["display"] = "block";
    document.querySelector('.computer-choice-container > .box1').style["display"] = "block";
}

function showComputerChoice(cpChoice) {
    if(cpChoice === 'rock') {
        document.querySelector('.computer-choice-container > .box2').style["display"] = "none";
        document.querySelector('.computer-choice-container > .box3').style["display"] = "none";
    }
    else if(cpChoice === 'paper') {
        document.querySelector('.computer-choice-container > .box1').style["display"] = "none";
        document.querySelector('.computer-choice-container > .box3').style["display"] = "none";
    }
    else if(cpChoice === 'scissors') {
        document.querySelector('.computer-choice-container > .box2').style["display"] = "none";
        document.querySelector('.computer-choice-container > .box1').style["display"] = "none";
    }
}
playGame();