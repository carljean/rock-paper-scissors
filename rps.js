function getComputerChoice() {
    const choices = "rock paper scissors";

    return choices.split(" ")[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Type in your choice between (rock, paper, scissors): ");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = '';
    let computerChoice = '';


    function playRound(humanChoice, computerChoice) {
        let human_choice = humanChoice.toLowerCase().trim();
    
        if(human_choice === computerChoice) {
            console.log(`It is a tie!`);
            console.log(`Human Score ${humanScore}-${computerScore} Computer Score`);
        }
    
        else if(human_choice === 'rock' && computerChoice === 'scissors') {
            humanScore++;
            console.log(`You win! ${human_choice} beats ${computerChoice}`);
            console.log(`Human Score ${humanScore}-${computerScore} Computer Score`);
        }
    
        else if(human_choice === 'paper' && computerChoice === 'rock') {
            humanScore++;
            console.log(`You win! ${human_choice} beats ${computerChoice}`);
            console.log(`Human Score ${humanScore}-${computerScore} Computer Score`);
        }
    
        else if(human_choice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            console.log(`You win! ${human_choice} beat ${computerChoice}`);
            console.log(`Human Score ${humanScore}-${computerScore} Computer Score`);
        }
    
        else if(human_choice === 'paper' && computerChoice === 'scissors') {
            computerScore++;
            console.log(`You lose! ${computerChoice} beat ${human_choice}`);
            console.log(`Human Score ${humanScore}-${computerScore} Computer Score`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${human_choice}`);
            console.log(`Human Score ${humanScore}-${computerScore} Computer Score`);
        }
    }



    for(let i = 1; i <= 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        console.log(`Human's choice: ${humanChoice}`);
        console.log(`Computer's choice: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
    }
}

playGame();